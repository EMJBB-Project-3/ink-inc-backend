const express = require('express');
// const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
// const mongodb = require('mongodb').MongoClient;
// const { Thing } = require('./models');
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



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