const mongoose = require('mongoose')
const {MIN_LENGTH_ERROR, REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const PostSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
        minlength: [3, MIN_LENGTH_ERROR(this)]
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Types.ObjectId,
            ref: "Users"
        },
        likes: [
            {
                likedBy: {
                    type: mongoose.Types.ObjectId,
                    ref: "Users",
                }
            }
        ]
    }],
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    }
})

module.exports = mongoose.model("Posts", PostSchema);
