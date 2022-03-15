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

const {
  getAllPostsQuery,
  getUserPosts,
  addPostQuery,
} = require('./posts');

module.exports = {
  checkUsernameExistsQuery,
  checkEmailExistsQuery,
  createNewUser,
  checkUsernameQuery,
  getUsernameQuery,
  getAllPostsQuery,
  getUserPosts,
  addPostQuery,
};
