const Post = require("../models/Post")
const CustomError = require("../CustomError");


const getAllPosts = async (req, res) => {
    const posts = await Post.find().select()
    return res.status(200).json({
        success: true,
        data: posts
    })

}
const addPost = async (req, res,) => {
    const post = await Post.create({
        title: req.body.title,
        description: req.body.description,
        imageUrl: "uploads/"+req.file.path,
        comment: req.body.comment,
        username:req.body.username,
    });
    console.log(post)
    post.save().then(result => {
        res.status(201).json({
            message: "created post succesfully",
        });
    }).catch(error => {
          res.status(500).json({error:error})
    })
}

module.exports = {
    getAllPosts,
    addPost,
}

