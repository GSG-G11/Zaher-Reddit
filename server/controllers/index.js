const { clientError, serverError } = require('./error');
const { getLoginPage, getSignupPage, getProfilePage } = require('./pages');
const {
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
  deleteComment,
} = require('./apis');

module.exports = {
  clientError,
  serverError,
  getLoginPage,
  getSignupPage,
  signupHandler,
  loginHandler,
  handleLogout,
  getUsername,
  getAllPosts,
  getProfilePage,
  getUserPosts,
  addPost,
  getPostVotes,
  vote,
  getPostComments,
  addComment,
  deletePostHandler,
  deleteComment,
};
