const { signToken, verifyToken } = require('./jwt');

const {
  loginSchema,
  signupSchema,
  checkTaken,
  addPostSchema,
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
  addPostSchema,
  emptyTitle,
  tooShortTitle,
  tooLongContent,
};
