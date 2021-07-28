const express= require("express");
const router=express.Router();
const {signIn, signUp} = require("../controllers/usersController");
const profileImageUpload =require("../crossCuttingConcerns/middlewares/libraries/profileImageUpload");

router.post("/signin",signIn);
router.post("/signup",profileImageUpload.single("imageUrl"),signUp);
module.exports= router;


