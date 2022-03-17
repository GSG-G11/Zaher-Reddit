const getAllPosts = require('./getAllPosts');
const getUserPosts = require('./getUserPosts');
const addPost = require('./addPost');
const getPostVotes = require('./getPostVotes');
const deletePostHandler = require('./deletePostHandler');

module.exports = {
  getAllPosts,
  getUserPosts,
  addPost,
  getPostVotes,
  deletePostHandler,
};
