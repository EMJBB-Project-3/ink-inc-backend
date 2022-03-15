const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '1h';
/*
We then assign values for both a secret and expiration. 
The secret is a private key that signs the token and enables 
the server to verify whether the token is valid. 
The expiration is the length of time the token remains valid before expiring
*/

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};