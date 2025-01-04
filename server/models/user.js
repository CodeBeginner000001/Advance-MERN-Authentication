const mongoose = require("mongoose")
const Schema  = mongoose.Schema
const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    name:{
        type: String,
        required:true,
    },
    lastLogin:{
        type:Date,
        default:Date.now,
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    // for security purposes
    resetPasswordToken: String, // token for password reset
    resetPasswordExpiresAt: Date, // expire the token
    verificationToken: String, // token for email verification
    verificationTokenExpiresAt: Date, // expire the token

},{timestamps: true}) // timestamps: These are used to track the doc that is created and updated at

const User = mongoose.model("User",userSchema);
module.exports = User; // export the model