const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { signUpController, otpVerifyController } = require('../Controller/user.controller');

router.post('/signup', 
    body('firstName').trim().notEmpty().withMessage('First Name is required').isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
    body('lastName').trim().notEmpty().withMessage('Last Name is required').isLength({ min: 3 }).withMessage('Last Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('phoneNumber').isLength({ min: 11}).withMessage('Phone number must be at least 11 characters long'),
    signUpController
);
router.post('/otp-verify', otpVerifyController );

module.exports = router;