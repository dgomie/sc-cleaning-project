require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Employee } = require('../models');

const secret = process.env.JWT_EMPLOYEE_SECRET;
const expiration = '48h';

module.exports = {
  signToken: ({ id, employeeId, role }) => {
    const payload = { id, employeeId, role };
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
      req.employee = data;
      const employee = await Employee.findById(data.id);
      if (employee) {
        req.employee = employee;
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