const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CustomError = require("../crossCuttingConcerns/helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const secret = "test";
const Post =require("../models/Post")
const mongoose = require("mongoose");

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
   const {username, firstName, lastName, email, password, confirmPassword,imageUrl} = req.body;
   if (password !== confirmPassword) return res.status(404).json({message: "Şifreler birbirinden farklı olamaz"})
   const oldUser = await User.findOne({email})
   if (oldUser) return res.status(400).json({message: "Bu Email'e Kayıtlı Kullanıcı Mevcut"})
   const hashedPassword = await bcrypt.hash(password, 12);
   const result = await User.create({email, password: hashedPassword, firstName, lastName,username,imageUrl: `http://localhost:5000/profileImages/${req.savedProfileImage}`,});
   const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1h"})
   return res.status(201).json({result, token})
})
const likeUndoLikePost = asyncErrorWrapper(async (req, res) => {
   const {postId,likedBy} = req.body;
   if (!mongoose.Types.ObjectId.isValid(likedBy)) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${likedBy}`);
   const user = await User.findById(likedBy);
   if (!user) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${likedBy}`);
   if (!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).send(`Bu Id'ye uygun post bulunamadı.. ${postId}`);
   const post = await Post.findById(postId);
   if (!post) return res.status(404).send(`Bu Id'ye uygun post bulunamadı.. ${postId}`);

   const postIndex = user.imageUrl.findIndex(post => post._id.toString() === post.toString())
   if (postIndex === -1) {
      return res.status(404).send(`Bu Id'ye uygun post bulunamadı.. ${postIndex}`);
   }
   console.log(postIndex)

   const index = post.imageUrl[postIndex].likes.findIndex(like => like.likedBy.toString() === likedBy.toString());

   if (index === -1) {
      post.comments[postIndex].likes.push({likedBy: likedBy});
   } else {
      post.imageUrl[postIndex].likes = post.imageUrl[postIndex].likes.filter(like => like.likedBy._id.toString() !== likedBy.toString())
   }
   console.log(index)
   post.save();
   post.populate("imageUrl.likes.likedBy").execPopulate().then(response => {
      return res.status(201).json({message: "begenme başarılı", data: response.imageUrl})
   })
})

module.exports = {
   signIn,
   signUp,
   likeUndoLikePost
}
