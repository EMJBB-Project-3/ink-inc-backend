// const mongoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const postSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true
      },
      text: {
        type: String,
        
      },
      artist: {
        type: String,
        required: true
      },
     createdOn: {
       type: Date,
       default: Date.now()
     },
     favorites: {
      type: Number 
    }
    
})


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