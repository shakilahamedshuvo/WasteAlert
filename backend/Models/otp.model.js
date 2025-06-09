const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    userId: mongoose.Schema.ObjectId,
    otp: String,
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60,
    },
    email:{
        type:String,

    }
});

const otpModel =  mongoose.model("otp", otpSchema);
module.exports = otpModel;
