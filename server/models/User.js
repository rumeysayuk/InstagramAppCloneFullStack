const {EMAIL_UNIQUE_ERROR, PLEASE_PROVIDE_EMAIL, REQUIRED_ERROR} = require("../constants/messages/globalMessages");
const {PASSWORD_MIN_LENGTH_ERROR} = require("../constants/messages/authMessages");
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
    },

    lastName: {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
    },

    email: {
        type: String,
        required: [true, REQUIRED_ERROR(this)],
        unique: [true, EMAIL_UNIQUE_ERROR],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, PLEASE_PROVIDE_EMAIL],
    },

    password: {
        type: String,
        minlength: [6, PASSWORD_MIN_LENGTH_ERROR],
        required: [true, REQUIRED_ERROR(this)],
        select: false,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },

    blocked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Users", UserSchema);
