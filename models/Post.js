const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username: String,
    title: String,
    text: String,
    artist: String,
    // date: {
    //   type: Date,
    //   default: Date.now,
    // },
    // favorites: Number,
});

const Post = mongoose.model('Post', postSchema);

// const handleError = (err) => console.error(err);

// User.create(
//     {
//       username: 'testUser',
//       email: 'email@mail.com',
//       password: 'Password1'
//     },
//     (err) => (err ? handleError(err) : console.log('Created new document'))
//   );
  
  module.exports = Post;