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
  deleteCommentQuery,
} = require('./comments');

const {
  insertUserVote,
  checkUserDidVote,
  checkUserDidVoteUpOrDown,
  changeUserVoteType,
} = require('./votes');

const {
  getAllPostsQuery,
  getUserPosts,
  addPostQuery,
  getPostVotesQuery,
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
  getPostCommentsQuery,
  addCommentQuery,
  deletePostQuery,
  deleteCommentQuery,
  insertUserVote,
  checkUserDidVote,
  checkUserDidVoteUpOrDown,
  changeUserVoteType,
};
