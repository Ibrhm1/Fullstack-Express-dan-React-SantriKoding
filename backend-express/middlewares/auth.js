const express = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({
      message: 'Token not found',
    });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: 'Invalid token',
      });
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
