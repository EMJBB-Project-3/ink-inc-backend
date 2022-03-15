const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
    favoritePosts: [Post]
  }

  type Auth {
    token: ID!
    user: User 
  }

  type Post {
    username: String,
    text: String,
    artist: String,
    createdOn: String
    favorites: Int 
  }

  type Query {
    allUsers: [User]
    user(userId: ID!): User
    allPosts: [Post]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;