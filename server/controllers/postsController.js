const Post = require("../models/Post")
const User = require("../models/User")
const mongoose = require("mongoose");
const CustomError = require("../CustomError");


const getAllPosts = async (req, res, next) => {
    const posts = await Post.find().select()
    console.log(posts)
    console.log(req.file)
    return res.status(200).json({
        success: true,
        data: posts
    })

}
const addPost = async (req, res, next) => {
    console.log(req.file)

    const post = await Post.create({
        postId: req.body._id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.file.path,
        comment: req.body.comment,
    });
    post.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "created post succesfully",
            createdPost: {
                title: result.title,
                description: result.description,
                postId: result._id,
                request: {
                    type: 'POST',
                    url: "http://localhost:5000/api/posts/" + result._id,
                }
            }
        });
    }).catch(error => {
          res.status(500).json({error:error})
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

