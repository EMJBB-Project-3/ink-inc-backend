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
    _id: ID
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
    userPosts(username: String!): [Post]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    addPost(username: String!, text: String!, artist: String!, favorites: Int): Post
    addFavorite(_id: ID!, username: String): Post
  }
`;

module.exports = typeDefs;