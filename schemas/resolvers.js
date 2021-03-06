const { AuthenticationError } = require('apollo-server-express');
const { User, Post} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    allUsers: async () => {
      return await User.find({});
    },

    user: async (parent, {userId}) => {
      return User.findOne({_id: userId})
    },

    allPosts: async() => {
    return await Post.find({})
    },

    userPosts: async(parent, {username}) => {
      return await Post.find({username:username})
    },

  },

   

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // console.log('hi', username, email, password)
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log('token', token)
      return { token, user };
    },


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('there is no user with this email!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },


    removeUser: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },

    // addPost: async (parent, {username, text, artist, favorites}) => {
    //   const newPost = await Post.create({username, text, artist, favorites})
    //   return newPost 
    // }

    //from act 21.25
    addPost: async (parent, { username, text, artist, favorites }, context) => {
      // if (context.user) {
        const newPost = await Post.create({username, text, artist, favorites});
        const userData = await User.findOneAndUpdate(
          {username: username},
          {$addToSet: {posts: newPost}}
          );
        console.log(userData);
        return newPost
        },

      // }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      // throw new AuthenticationError('You need to be logged in!');
    // },
    addFavorite: async (parent, {_id, username}) => {
      const favoritePost = await Post.findOneAndUpdate(
        {_id},
        {$inc: {favorites: 1}},
        {new: true}
        );

      const addToFavoritesArray = await User.findOneAndUpdate(
        {username},
        {$addToSet: {favoritePosts: _id}},
        {new:true}
      )
    
      return favoritePost, addToFavoritesArray;
    },
  },
};

module.exports = resolvers;