const signupSchema = require('./signupSchema');
const checkTaken = require('./checkTaken');
const loginSchema = require('./loginSchema');
const addPostSchema = require('./addPostSchema');

module.exports = {
  checkTaken,
  signupSchema,
  loginSchema,
  addPostSchema,
};
