const {
  checkUsernameExistsQuery,
  checkEmailExistsQuery,
  createNewUser,
} = require('./signup');

const {
  checkUsernameQuery,
} = require('./login');

const {
  getUsernameQuery,
} = require('./user');

module.exports = {
  checkUsernameExistsQuery,
  checkEmailExistsQuery,
  createNewUser,
  checkUsernameQuery,
  getUsernameQuery,
};
