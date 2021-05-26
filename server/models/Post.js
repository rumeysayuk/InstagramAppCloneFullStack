const mongoose = require('mongoose')
const {REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const {MIN_LENGTH_ERROR} = require("../constants/messages/postMessages");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, REQUIRED_ERROR("Başlık")],
        minlength: [3, MIN_LENGTH_ERROR("başlığı")]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    photos:{
        type:String,
    },
    description:{
        type: String,
        required: [true, REQUIRED_ERROR("Açıklama")],
        minlength: [3, MIN_LENGTH_ERROR("açıklaması")]
    }
})
module.exports = mongoose.model("Posts", PostSchema);
