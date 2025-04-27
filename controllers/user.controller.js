const User = require('../models/user.model')

const getAll = async () => {
    const user = await User.Create(req.body);
    res.send(user);
};

const getUserbyId = async () => {
    const user = await User.findById(req.params.id)
    res.send(user);
};

const createUser = async () => {
    const user = await User.create(req.body)
    res.send(user);

}

const updateUser = async () => {
    const user = await User.findOneAndUpdate(req.user.id);
    res.send(user)
}

const deleteUser = async () => {
    const user = await User.delete(req.user.id);
    res.send(user)
}

module.exports = {
    getAll,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser
}