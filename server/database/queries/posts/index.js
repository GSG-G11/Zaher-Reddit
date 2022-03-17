const getAllPostsQuery = require('./getAllPostsQuery');
const getUserPosts = require('./getUserPosts');
const addPostQuery = require('./addPostQuery');
const getPostVotesQuery = require('./getPostVotesQuery');
const voteQuery = require('./voteQuery');
const deletePostQuery = require('./deletePostQuery');

module.exports = {
  getAllPostsQuery,
  getUserPosts,
  addPostQuery,
  getPostVotesQuery,
  voteQuery,
  deletePostQuery,
};
