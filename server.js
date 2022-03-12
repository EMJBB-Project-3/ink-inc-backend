const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const path = require('path');
const { authMiddleware } = require('./utils/auth');

// const accessKeyId = require ('dotenv')
// const AWS = require('aws-sdk');
// const uuid = require ('uuid');

// var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
// AWS.config.credentials = credentials;

// AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
//   }
// });


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.get('/read', (req, res) => {
//     // Use db connection to find all documents in collection
//     db.collection('things')
//       .find()
//       .toArray((err, results) => {
//         if (err) throw err;
//         res.send(results);
//       });
//   });

// app.get('/', (req, res) => {
//     // Use db connection to find all documents in collection
//     db.collection('users')
//       .find()
//       .toArray((err, results) => {
//         if (err) throw err;
//         res.send(results);
//       });
//   });


//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//     });
//   });


const startApolloServer = async () => {
    // const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
    };


startApolloServer();