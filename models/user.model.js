const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

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
        required: [true, 'please confirm your password'],
        validate: {
            // this only works on create and save 
            validator: function (el) {
                return el === this.password;
            },
            message: 'passwords are not the same!'
        }
    },
});

userSchema.pre('save', async function (next) {
    //only run this function if password was actually modified
    if (this.isModified('password')) {
        return next();
    }
    // hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
})

const User = mongoose.model('User', userSchema)

module.export = User;