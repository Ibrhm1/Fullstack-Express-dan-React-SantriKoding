const express = require('express');
const { RegisterController } = require('../controllers/RegisterController');
const {
  validatorRegister,
  validateLogin,
} = require('../utils/validators/auth');
const { LoginController } = require('../controllers/LoginController');
const verifyToken = require('../middlewares/auth');
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/UserController');
const { validatorUser } = require('../utils/validators/user');
const router = express.Router();

router.post('/register', validatorRegister, RegisterController);
router.post('/login', validateLogin, LoginController);
router.get('/admin/users', verifyToken, getUsers);
router.post('/admin/users', verifyToken, validatorUser, createUser);
router.get('/admin/users/:id', verifyToken, getUserById);
router.put('/admin/users/:id', verifyToken, updateUser);
router.delete('/admin/users/:id', verifyToken, deleteUser);

module.exports = { router };
