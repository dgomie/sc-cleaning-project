const { User, Employee, Package } = require('../models');
const { GraphQLError } = require('graphql');
const { signUserToken } = require('../utils/user-auth');
const { signEmployeeToken } = require('../utils/employee-auth');
const { GraphQLScalarType, Kind } = require('graphql');

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Custom Date scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.toISOString(); t
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value);
      }
      return null;
    },
  }),

  Query: {
    getUsers: async () => {
      try {
        const allUsers = await User.find().select('-password');
        return allUsers;
      } catch (error) {
        console.error('error getting users', error);
        throw new Error('Failed to get users');
      }
    },
    getUser: async (_, { userId }) => {
      try {
        const oneUser = await User.findById(userId).select('-password');
        return oneUser;
      } catch (error) {
        console.error('error getting user', error);
        throw new Error('Failed to get user');
      }
    },
    getEmployees: async () => {
      try {
        const allEmployees = await Employee.find().select('-password');
        return allEmployees;
      } catch (error) {
        console.error('error getting employees', error);
        throw new Error('Failed to get employees');
      }
    },
    getEmployee: async (_, { employeeId }) => {
      try {
        const oneEmployee = await Employee.findOne({ employeeId }).select(
          '-password'
        );
        return oneEmployee;
      } catch (error) {
        console.error('error getting employee', error);
        throw new Error('Failed to get employee');
      }
    },
    getPackages: async () => {
      try {
        const allPackages = await Package.find();
        return allPackages
      } catch (error) {
        console.error('error getting all packages', error);
        throw new Error('Failed to get all packages')
      }
    },
    getPackage: async (_, { packageId }) => {
      try {
        const onePackage = await Package.findById(packageId);
        return onePackage
      } catch (error) {
        console.error('error getting package', error);
        throw new Error('Failed to get package')
      }
    },
 
  },
  Mutation: {
    createUser: async (
      _,
      { username, employeeId, email, firstName, lastName, password }
    ) => {
      try {
        const newUser = await User.create({
          username,
          employeeId,
          email,
          firstName,
          lastName,
          password,
        });
        const token = signUserToken(newUser);
        return { token, user: newUser };
      } catch (error) {
        console.error('Error creating user model:', error);
        throw new Error('Failed to create user model');
      }
    },

    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new GraphQLError('Invalid credentials', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new GraphQLError('Invalid credentials', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
      const token = signUserToken(user);
      return { token, user };
    },

    removeUser: async (_, { userId }) => {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        throw new Error('User not found.');
      }
      return deletedUser;
    },

    updateUser: async (_, { userId, updateData }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        updateData,
        { new: true }
      );
      return updatedUser;
    },

    employeeLogin: async (_, { employeeId, password }) => {
      const employee = await Employee.findOne({ employeeId });
      if (!employee) {
        throw new GraphQLError('Invalid credentials', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
      const correctPw = await employee.isCorrectPassword(password);
      if (!correctPw) {
        throw new GraphQLError('Invalid credentials', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
      const token = signEmployeeToken(employee);
      return { token, employee };
    },

    createEmployee: async (
      _,
      { employeeId, email, firstName, lastName, password, role }
    ) => {
      try {
        const newEmployee = await Employee.create({
          employeeId,
          email,
          firstName,
          lastName,
          password,
          role,
        });
        const token = signEmployeeToken(newEmployee);
        return { token, employee: newEmployee };
      } catch (error) {
        console.error('Error creating employee model:', error);
        throw new Error('Failed to create employee model');
      }
    },

    removeEmployee: async (_, { _id }) => {
      const deletedEmployee = await Employee.findByIdAndDelete(_id);
      if (!deletedEmployee) {
        throw new Error('Employee not found.');
      }
      return deletedEmployee;
    },

    updateEmployee: async (_, { _id, updateData }) => {
      const updatedEmployee = await Employee.findOneAndUpdate(
        { _id: _id },
        updateData,
        { new: true }
      );
      return updatedEmployee;
    },

    createPackage: async (
      _,
      { package, price, userId, recurring, dateCreated }
    ) => {
      try {
        const newPackage = await Package.create({
          package,
          price,
          userId,
          recurring,
          dateCreated
        });
        return { package: newPackage };
      } catch (error) {
        console.error('Error creating package model:', error);
        throw new Error('Failed to create package model');
      }
    },
  },
};

module.exports = resolvers;
