const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'please enter your name']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please provide a valid email']
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'please provide password']
    },
});

const User = mongoose.model('User', userSchema)

module.export = User;