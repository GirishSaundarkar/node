const User = require('../models/user.model');
const CatchAsync = require('../middlewares/CatchAsync')

const getAll = CatchAsync(async () => {
    const user = await User.find();
    res.send(user);
});

const getUserById = CatchAsync(async () => {
    const user = await User.findById(req.user.id)
    res.send(user);
});

const createUser = CatchAsync(async () => {
    const user = await User.create(req.body)
    res.send(user);

})

const updateUser = CatchAsync(async () => {
    const user = await User.findOneAndUpdate(req.user.id);
    res.send(user)
})

const deleteUser = CatchAsync(async () => {
    const user = await User.findOneAndUpdate(req.user.id);
    res.send(user)
})

module.exports = {
    getAll,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}