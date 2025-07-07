const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const prisma = require('../prisma/client');

//* register
const RegisterController = async (req, res) => {
  //* check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //* if validation error, return error message
    return res.status(422).json({
      success: false,
      message: 'validation error',
      errors: errors.array(),
    });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10); //* hash password
  try {
    //* create user
    const user = await prisma.users.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });
    res.status(200).send({
      success: true,
      message: 'Register successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error' + error.message,
    });
  }
};

module.exports = { RegisterController };
