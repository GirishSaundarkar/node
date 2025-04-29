const User = require('../models/user.model');
const CatchAsync = require('../middlewares/CatchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const register = CatchAsync(async (req, res, next) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });

    const token = signToken(user._id );

    res.status.send(201).json({
        status: 'sucess',
        token,
        data: {
            user
        }
    })
});

const login = CatchAsync(async () => {
    const { email, password } = req.body;

    //1)check if email and passoword exist
    if (!email || password) {
        return next(AppError('please provide email and password!', 400))
    }
    //2) check if user exists && password is correct
    const user = User.findOne({ email });
   

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    //3) if everything is ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
        status: 'success',
        token
    })

})

module.exports = {
    register,
    login
};