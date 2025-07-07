const { body } = require('express-validator'); //* import express validator
const prisma = require('../../prisma/client');

//* Definisikan validasi untuk create user
const validatorUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .custom(async (value, { req }) => {
      if (!value) {
        throw new Error('Email is required');
      }
      const user = await prisma.users.findUnique({ where: { email: value } });
      if (user && user.id !== Number(req.params.id)) {
        throw new Error('Email already exists');
      }
      return true;
    }),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

module.exports = { validatorUser };
