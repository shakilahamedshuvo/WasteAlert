const userModel = require('../Models/user.model');

module.exports.signUpController = async (req, res, next) => {
    try {
        const { firstName, lastName, phoneNumber, email,  password } = req.body;
        const hashedpassword = await userModel.hashPassword(password);
        const isUserExists = await userModel.findOne({ email: email});
        if(isUserExists){
            return res.status(409).json({message: 'user already exists with this email'});
        }
        const user = await userModel.create({ firstName, lastName,  phoneNumber, email, password: hashedpassword });
        const token = user.tokenGenerator();
        res.status(201).json({ token, user });
    } catch (error) {
        next(error);
    }
}