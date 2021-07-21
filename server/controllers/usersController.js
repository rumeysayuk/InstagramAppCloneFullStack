const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const secret = "test";

const signIn = asyncErrorWrapper(async (req, res, next) => {
   const {email, password} = req.body;
   const oldUser = await User.findOne({email}).select("+password");
   // if (!oldUser) return next(new CustomError("Böyle Bir Kullanıcı Bulunamadı", 400));
   if (!oldUser){
      return next(new CustomError("Please Check Your Inputs!", 400));
   }

   // return next(new CustomError("Böyle Bir Kullanıcı Bulunamadı", 400))
   // return res.status(404).json({message: "Böyle Bir Kullanıcı Bulunamadı"})
   const isPasswordCorrect = await bcrypt.compareSync(password, oldUser.password);
   if (!isPasswordCorrect) {
      return next(new CustomError("Hatalı Şifre", 400));
   }

   // return res.status(400).json({message: "Hatalı Şifre"});
   const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "1h"})

   return res.status(200).json({result: oldUser, token})
})

const signUp = asyncErrorWrapper(async (req, res) => {
   const {username, firstName, lastName, email, password, confirmPassword} = req.body;
   if (password !== confirmPassword) return res.status(404).json({message: "Şifreler birbirinden farklı olamaz"})
   const oldUser = await User.findOne({email})
   if (oldUser) return res.status(400).json({message: "Bu Email'e Kayıtlı Kullanıcı Mevcut"})
   const hashedPassword = await bcrypt.hash(password, 12);
   const result = await User.create({email, password: hashedPassword, firstName, lastName, username});
   const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1h"})
   return res.status(201).json({result, token})
})


module.exports = {
   signIn,
   signUp,
}
