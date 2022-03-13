const { loginSchema, signupSchema, checkTaken } = require('./validation');
const { signToken } = require('./jwt');
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
} = require('./models');

module.exports = {
  signToken,
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
};
