const { loginSchema, signupSchema, checkTaken } = require('./validation');
const { signToken, verifyToken } = require('./jwt');
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
  post,
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
  post,
};
