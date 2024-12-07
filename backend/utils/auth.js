const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'your_secret_key';
const expiration = '48h';

module.exports = {
  signToken: ({ id, username, email }) => {
    const payload = { id, username, email };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  authMiddleware: async ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret);
      req.user = data;
      const user = await User.findById(data.id);
      if (user) {
        req.user = user;
      }
    } catch (err) {
      console.error('Invalid token', err);
    }
    return req;
  },
  hashPassword: async (password) => {
    return await bcrypt.hash(password, 10);
  },
  checkPassword: async (inputPassword, savedPassword) => {
    return await bcrypt.compare(inputPassword, savedPassword);
  }
};