const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String,
    password: String,
    posts: [Post]
    favoritePosts: [Post]
  }

  type Post {
    username: String,
    text: String,
    artist: String,
    createdOn: String
    favorites: Number  
  }


  type Query {
    allUsers: [User]
    allPosts: [Post]
  }
`;

module.exports = typeDefs;