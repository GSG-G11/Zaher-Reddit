const {
  successSignup,
  invalidUsername,
  invalidPassword,
  takenUsername,
  takenEmail,
} = require('./signupModels');

const {
  unverifiedUsername,
  successLogin,
  notExistUsername,
  unverifiedPassword,
  incorrectPassword,
} = require('./loginModels');

module.exports = {
  successSignup,
  invalidUsername,
  takenUsername,
  invalidPassword,
  takenEmail,
  unverifiedUsername,
  successLogin,
  notExistUsername,
  unverifiedPassword,
  incorrectPassword,
};
