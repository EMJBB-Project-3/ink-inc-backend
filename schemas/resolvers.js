const { AuthenticationError } = require('apollo-server-express');
const { User, Post} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    allUsers: async () => {
      return await User.find({});
    },

    allPosts: async() => {
    return await Post.find({})
    }
  }
};

// const resolvers = {
//   Query: {
//     profiles: async () => {
//       return Profile.find();
//     },

//     profile: async (parent, { profileId }) => {
//       return Profile.findOne({ _id: profileId });
//     },
//   },

//   Mutation: {
//     addProfile: async (parent, { name, email, password }) => {
//       const profile = await Profile.create({ name, email, password });
//       const token = signToken(profile);
//       console.log('token', token)
//       return { token, profile };
//     },
//     login: async (parent, { email, password }) => {
//       const profile = await Profile.findOne({ email });

//       if (!profile) {
//         throw new AuthenticationError('No profile with this email found!');
//       }

//       const correctPw = await profile.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect password!');
//       }

//       const token = signToken(profile);
//       return { token, profile };
//     },

//     addSkill: async (parent, { profileId }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeProfile: async (parent, { profileId }) => {
//       return Profile.findOneAndDelete({ _id: profileId });
//     },
//     removeSkill: async (parent, { profileId }) => {
//       return Profile.findOneAndUpdate(
//         { _id: profileId },
//         { new: true }
//       );
//     },
//   },
// };

module.exports = resolvers;