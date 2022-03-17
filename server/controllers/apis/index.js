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
  deleteComment,
} = require('./comments');

const {
  voteHandler,
} = require('./votes');

const {
  getAllPosts,
  getUserPosts,
  addPost,
  getPostVotes,
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
  getPostComments,
  addComment,
  deletePostHandler,
  deleteComment,
  voteHandler,
};
