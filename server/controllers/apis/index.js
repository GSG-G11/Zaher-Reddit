const {
  signupHandler,
  loginHandler,
  handleLogout,
} = require('./auth');

const {
  getUsername,
} = require('./user');

const {
  getAllPosts,
  getUserPosts,
  addPost,
  getPostVotes,
  vote,
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
};
