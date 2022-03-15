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

const {
  validPost,
  emptyTitle,
  tooShortTitle,
  tooLongContent,
} = require('./addPostModels');

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
  validPost,
  emptyTitle,
  tooShortTitle,
  tooLongContent,
};
