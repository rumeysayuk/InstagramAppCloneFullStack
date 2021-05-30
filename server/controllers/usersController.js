const User = require("../models/User");
const getAllUsers = async (req, res) => {
    const users = await User.find();
    return res.status(200).json({
        success: true,
        data: users
    })
}

const addUser=async()=>{
await User.create({
    firstname:"Rümeysa",
    lastname:"Yük",
    email:"rumeysayuk80@gmail.com",
    password:"12377777",
});
}
module.exports={
   getAllUsers,
    addUser,
}
