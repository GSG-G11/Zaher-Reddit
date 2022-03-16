const { signToken, verifyToken } = require('./jwt');

const {
  loginSchema,
  signupSchema,
  checkTaken,
  addPostSchema,
  addCommentSchema,
} = require('./validation');

const {
  successSignup,
  invalidUsername,
  takenUsername,
  takenEmail,
  invalidPassword,
  unverifiedUsername,
  successLogin,
  notExistUsername,
  unverifiedPassword,
  incorrectPassword,
  validPost,
  emptyTitle,
  tooShortTitle,
  tooLongContent,
} = require('./models');

module.exports = {
  signToken,
  verifyToken,
  checkTaken,
  signupSchema,
  loginSchema,
  addPostSchema,
  addCommentSchema,
  successSignup,
  invalidUsername,
  takenUsername,
  takenEmail,
  invalidPassword,
  unverifiedUsername,
  successLogin,
  notExistUsername,
  unverifiedPassword,
  incorrectPassword,
  validPost,
  emptyTitle,
  tooShortTitle,
  tooLongContent,
};
