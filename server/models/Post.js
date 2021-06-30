const mongoose = require('mongoose')
const {MIN_LENGTH_ERROR, REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
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
    comments:[{
        text: String,
        postedBy: {
            type: mongoose.Types.ObjectId,
            ref: "Users"
        }
    }] ,
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    username:{
        type:String,
        ref:"Users",
    }

})
PostSchema.methods.addPost = function (postItem) {
    const index = this.post.items.findIndex(p => {
        return p.postId.toString() === postItem._id.toString();
    })
    const updatedPostItems = [...this.post.items];
    let itemQuantity = 1;
    if (index >= 0) {
        itemQuantity = this.post.items[index].quantity + 1;
        updatedPostItems[index].quantity = itemQuantity;
    } else {
        updatedPostItems.push({
            postId: postItem._id,
            quantity: itemQuantity,
        })
    }
    this.post = {
        items: updatedPostItems,
    }
    return this.save();

}
module.exports = mongoose.model("Posts", PostSchema);
