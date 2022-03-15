const { AuthenticationError } = require('apollo-server-express');
const { User, Post} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    allUsers: async () => {
      return await User.find({});
    },

    user: async(parent, { profileId }) => {
      return User.findOne({ _id: userId });
    },

    allPosts: async() => {
    return await Post.find({})
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log('hi', username, email, password)
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log('token', token)
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('there is no user with this email!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;