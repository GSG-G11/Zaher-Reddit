const signupSchema = require('./signupSchema');
const checkTaken = require('./checkTaken');
const loginSchema = require('./loginSchema');

module.exports = {
  checkTaken,
  signupSchema,
  loginSchema,
};
