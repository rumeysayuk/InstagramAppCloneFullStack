const Post = require("../models/Post")
// const CustomError = require("../helpers/error/CustomError");
const User = require('../models/User');
const mongoose = require("mongoose")

const getAllPosts = async (req, res) => {
    const posts = await Post.find()
    return res.status(200).json({
        success: true,
        data: posts
    })

}

const addPost = async (req, res) => {
    const post = await Post.create({
        ...req.body,
        imageUrl: `http://localhost:5000/postImages/${req.savedProfileImage}`,
    });
    post.save().then(() => {
        res.status(201).json({
            message: "created post succesfully",
            post,
        });
    })
}

const addComment = async (req, res) => {
    const { text, postedBy, postId } = req.body;
    if(!mongoose.Types.ObjectId.isValid(postedBy)) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${postedBy}`);

    const user = await User.findById(postedBy);
    if (!user) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${postedBy}`);

    if(!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).send(`Bu Id'ye uygun post bulunamadı.. ${postId}`);
    const post = await Post.findById(postId);
    if (!post) return res.status(404).send(`Bu Id'ye uygun post bulunamadı.. ${postId}`);

    post.comments.push({ text, postedBy })
    post.save();

    post.populate("comments.postedBy").execPopulate().then(response=>{
        return res.status(201).json({message: "yorum başarılı", data: response.comments})
    })
}

module.exports = {
    getAllPosts,
    addPost,
    addComment
}

