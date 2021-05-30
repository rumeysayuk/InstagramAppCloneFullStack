const Post =require("../models/Post")

const getAllPosts=async (req,res)=>{
const posts=await Post.find();
return res.status(200).json({
    success:true,
    data:posts
})
}

const addPost=async ()=>{
    await Post.create({
        title:"'2 gönderi",
        description:"kahve"
    })
}
module.exports={
    getAllPosts,
    addPost,
}
