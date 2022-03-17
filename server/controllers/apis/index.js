const {
  signupHandler,
  loginHandler,
  handleLogout,
} = require('./auth');

const {
  getUsername,
} = require('./user');

const {
  getPostComments,
  addComment,
} = require('./comments');

const {
  getAllPosts,
  getUserPosts,
  addPost,
  getPostVotes,
  vote,
  deletePostHandler,
} = require('./posts');

module.exports = {
  signupHandler,
  loginHandler,
  handleLogout,
  getUsername,
  getAllPosts,
  getUserPosts,
  addPost,
  getPostVotes,
  vote,
  getPostComments,
  addComment,
  deletePostHandler,
};
