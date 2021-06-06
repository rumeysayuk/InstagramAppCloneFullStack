const express =require("express")
const {getAllPosts,addPost}=require("../controllers/postsController");
const router=express.Router();


router.get("/",getAllPosts);
router.post("/addpost",addPost);

module.exports=router;
