const { User } = require('../models');
const { GraphQLError } = require('graphql');
const { signToken } = require('../utils/auth');


const resolvers = {
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
    
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      try {
        const newUser = await User.create({ username, email, password });
        const token = signToken(newUser);
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
      const token = signToken(user);
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
      const updatedUser = await User.findOneAndUpdate({ _id: userId }, updateData, { new: true });
      return updatedUser;
    },

  },
};

module.exports = resolvers;

