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
  getPostCommentsQuery,
  addCommentQuery,
} = require('./comments');

const {
  getAllPostsQuery,
  getUserPosts,
  addPostQuery,
  getPostVotesQuery,
  voteQuery,
  deletePostQuery,
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
  getPostVotesQuery,
  voteQuery,
  getPostCommentsQuery,
  addCommentQuery,
  deletePostQuery,
};
