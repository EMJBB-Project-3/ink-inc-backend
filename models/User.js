const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
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