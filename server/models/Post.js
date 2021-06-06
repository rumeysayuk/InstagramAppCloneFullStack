const mongoose = require('mongoose')
const {MIN_LENGTH_ERROR,REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
       minlength: [3, MIN_LENGTH_ERROR(this)]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    imageUrl:{
        type:String,
    },
    description:{
        type: String,
        required: [true, REQUIRED_ERROR(this)],
        minlength: [3, MIN_LENGTH_ERROR(this)]
    },
    comment:{
        type: String,
        required: [false],
        minlength: [3, MIN_LENGTH_ERROR(this)]
    },
    user:{

        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: false,
    },
})
PostSchema.methods.addPost = function (postItem) {
    const index = this.post.items.findIndex(p => {
        console.log(index)
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
