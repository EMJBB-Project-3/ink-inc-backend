const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      maxlength: 280
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   required: true,
    //   match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    // },
    password: { 
      type: String,
      required: true,
      minlength: 8,
      maxlength: 280
    },
    posts: [
      {type: Schema.Types.ObjectId,
        ref: 'Post' 
       }
    ],
    favoritePosts: [
      {type: Schema.Types.ObjectId,
        ref: 'Post' 
       }
    ]

})


const User = mongoose.model('User', userSchema);

// const handleError = (err) => console.error(err);

// User.create(
//     {
//       username: 'testUser',
//       email: 'email@mail.com',
//       password: 'Password1'
//     },
//     (err) => (err ? handleError(err) : console.log('Created new document'))
//   );
  
  module.exports = User;