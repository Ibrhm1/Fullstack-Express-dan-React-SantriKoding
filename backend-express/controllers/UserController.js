const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const prisma = require('../prisma/client/index');
const { warnEnvConflicts } = require('@prisma/client/runtime/library');

//* get Users
const getUsers = async (req, res) => {
  try {
    const user = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
    res.status(200).send({
      success: true,
      message: 'Get users successfully',
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Internal server error',
    });
  }
};

//* create Users
const createUser = async (req, res) => {
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
      message: 'Create user successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error' + error.message,
    });
  }
};

//* get user by id
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'User not found',
      });
    }
    res.status(200).send({
      success: true,
      message: `Get user by id ${id} successfully`,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error' + error.message,
    });
  }
};

//* update user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'validation error',
      errors: errors.array(),
    });
  }
  try {
    const dataUpdate = {};
    if (req.body.name && req.body.name.trim() !== '')
      dataUpdate.name = req.body.name;

    if (req.body.email && req.body.email.trim() !== '')
      dataUpdate.email = req.body.email;

    if (req.body.password && req.body.password.trim() !== '') {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      dataUpdate.password = hashedPassword;
    }

    if (Object.keys(dataUpdate).length === 0) {
      return res.status(400).send({
        success: false,
        message: 'No valid fields provided for update',
      });
    }

    const user = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: dataUpdate,
    });

    res.status(200).send({
      success: true,
      message: `Update user by id ${id} successfully`,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

//* delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.users.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).send({
      success: true,
      message: `Delete user by id ${id} successfully`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
