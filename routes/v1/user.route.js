const express = require('express');
const userController = require('../../controllers/user.controller');
const authController = require('../../controllers/authController');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login)


router.route('/').get(userController.getAll).post(userController.createUser);

router.route('/:id')
    .get(userController.getUserById)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router