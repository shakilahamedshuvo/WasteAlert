const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema(
  {
    firstName: {
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
        required: true,
        unique: true,
        minlength: [11, 'Phone number must be at least 11 characters long'],
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    sockeId:{
      type:String,
    },
    // role: {
    //     type: String,
    //     enum: ['user', 'team', 'admin'],
    // },
    location: {
    type: {
      type: String,
      enum: ['Point'],
      // required: true,
      default: 'Point',
    },
    coordinates: {
      type: [Number], 
      // required: true,
    },
  },
  }
)

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;