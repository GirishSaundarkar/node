const User = require('../models/user.model');
const CatchAsync = require('../middlewares/CatchAsync')

const register = CatchAsync(async (req, resizeBy, next) => {
    const user = await User.create(req.body);

    res.status.send(201).json({
        status: 'sucess',
        data: {
            user
        }
    })
});

const login = CatchAsync(async () => {
    
})

module.exports = {
    register,
    login
};