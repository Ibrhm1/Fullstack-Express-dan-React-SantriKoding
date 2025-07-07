const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const prisma = require('../prisma/client');
const jwt = require('jsonwebtoken');

const LoginController = async (req, res) => {
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

  try {
    //* find user
    const user = await prisma.users.findFirst({
      where: {
        email: req.body.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });
    //* if user not found
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    //* compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //* if password not valid
    if (!validPassword)
      return res.status(401).json({
        success: false,
        message: 'Invalid password',
      });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    }); //* generate token
    const { password, ...userWithoutPassword } = user; //* remove password
    //* return response
    res.status(200).json({
      success: true,
      message: 'Login successfully',
      data: {
        user: userWithoutPassword,
        token,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
    });
  }
};

module.exports = { LoginController };
