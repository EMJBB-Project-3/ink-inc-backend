const { gql } = require('apollo-server-express');

//type defs is the setup for a class
const typeDefs = gql`
  type User {
    username: String,
    email: String,
    password: String
  }

  type Post {
    username: String,
    title: String,
    text: String,
    artist: String,
    
  }

  type Query {
    allUsers: [User]
    allPosts: [Post]

  }
`;

module.exports = typeDefs;