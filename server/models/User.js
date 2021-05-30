const mongoose = require('mongoose')
const {
    EMAIL_UNIQUE_ERROR,
    INVALID_EMAIL,
    MIN_LENGTH_ERROR,
    REQUIRED_ERROR
} = require("../constants/messages/globalMessages");
const {PASSWORD_MIN_LENGTH_ERROR} = "../constants/messages/authMessages";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, REQUIRED_ERROR("İsim")],
        minlength: [3, MIN_LENGTH_ERROR("İsminiz", 3)]
    },
    lastname: {
        type: String,
        required: [true, REQUIRED_ERROR("Soyad")],
        minlength: [3, MIN_LENGTH_ERROR("Soyadınız", 3)]
    },
    email: {
        type: String,
        unique: [true, EMAIL_UNIQUE_ERROR],
        required: [true, REQUIRED_ERROR("Email")],
        match: [/^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, INVALID_EMAIL],
    },
    password: {
        type: String,
        required: [true, REQUIRED_ERROR("Şifre")],
        minlength: [6, PASSWORD_MIN_LENGTH_ERROR],
        select: false,
    },
    blocked: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model("Users", UserSchema);
