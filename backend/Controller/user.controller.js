const userModel = require('../Models/user.model');
const {validationResult} = require('express-validator')
const otpModel = require('../Models/otp.model')
const sendEmail = require('./sendEmail')

module.exports.signUpController = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const { firstName, lastName, phoneNumber, email, password } = req.body;
        const hashedpassword = await userModel.hashPassword(password);
        
        const isUserExists = await userModel.findOne({ email: email});
        if(isUserExists){
            return res.status(409).json({
            message: 'user already exists with this email'
            });
        }
        
        const user = await userModel.create({ firstName, lastName, phoneNumber, email, password: hashedpassword });
        const OtpCode = Math.floor(1000 + Math.random() * 9000).toString();
        
        // Create OTP record
        await otpModel.create({ userId: user._id, otp: OtpCode, email: email });
        
        // Generate token
        const token = user.tokenGenerator();
        
        // Send response immediately
        res.status(201).json({ token, user });
        
        // Send email after response
        sendEmail(email, `hi ${firstName} ${lastName} Your OTP is ${OtpCode}`)
            .catch(error => console.error('Email sending failed:', error));
            
    } catch (error) {
        next(error);
    }
}

module.exports.otpVerifyController = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const otpRecord = await otpModel.findOne({ email: email });
        console.log(otpRecord)
        if (!otpRecord) {
            return res.status(401).json({ message: "user not registered" });
        }
        if (otpRecord.otp === otp) {
            await userModel.updateOne({email:email}, {$set : {isVerified: true}})
            return res.status(200).json({ message: "OTP verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}