const userModel = require('../Models/user.model');

module.exports.signUpController = async (req, res, next) => {
    try {
        const { firstName, lastName, phoneNumber, email,  password } = req.body;
        const user = await userModel.create({ firstName, lastName,  phoneNumber, email, password });
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        next(error);
    }
}