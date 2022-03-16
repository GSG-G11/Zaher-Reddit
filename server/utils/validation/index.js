const signupSchema = require('./signupSchema');
const checkTaken = require('./checkTaken');
const loginSchema = require('./loginSchema');
const addPostSchema = require('./addPostSchema');
const addCommentSchema = require('./addCommentSchema');

module.exports = {
  checkTaken,
  signupSchema,
  loginSchema,
  addPostSchema,
  addCommentSchema,
};
