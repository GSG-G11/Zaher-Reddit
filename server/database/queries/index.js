const {
  checkUsernameExistsQuery,
  checkEmailExistsQuery,
  createNewUser,
} = require('./signup');

const {
  checkUsernameQuery,
} = require('./login');

module.exports = {
  checkUsernameExistsQuery,
  checkEmailExistsQuery,
  createNewUser,
  checkUsernameQuery,
};
