const Post = require("../models/Post")
const User = require("../models/User")
const mongoose = require("mongoose");
const CustomError = require("../CustomError");

const getAllPosts = async (req, res) => {
    const posts = await Post.find();
    return res.status(200).json({
        success: true,
        data: posts
    })
}
const addPost = async (req, res) => {
    await Post.create({
        postId: req.body._id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        comment: req.body.comment,

    })
    console.log(req.body)
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${_id}`);

    const user = await User.findOne({
        _id: postId
    })
    if (!user) return res.status(404).send(`Bu Id'ye uygun kullanıcı bulunamadı.. ${_id}`);
    await user.addPost(postItem)
        .then(response => {
            user.populate("post.items.postId")
                .execPopulate()
                .then(response => {
                    return res.status(200).json({message: "Post Ekleme Başarılı", post: response.post()})
                })
        });
}


module.exports = {
    getAllPosts,
    addPost,
}
