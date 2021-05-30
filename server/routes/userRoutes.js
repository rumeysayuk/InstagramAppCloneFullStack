const express= require("express")
const {signUpWithGoogle} = require("../controllers/usersController");
const {getAllUsers} = require("../controllers/usersController");
const router=express.Router();

router.get("/", getAllUsers)
router.post("/signup-with-google", signUpWithGoogle)

module.exports=router
