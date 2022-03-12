const { User, Post } = require('../models');


// const resolvers = {
//   Query: {
//     things: async () => {
//       return await Thing.find({});
//     }
//   }
// };

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

module.exports = resolvers;