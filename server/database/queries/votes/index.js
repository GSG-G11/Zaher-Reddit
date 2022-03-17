const insertUserVote = require('./insertUserVote');
const checkUserDidVote = require('./checkUserDidVote');
const checkUserDidVoteUpOrDown = require('./checkUserDidVoteUpOrDown');
const changeUserVoteType = require('./changeUserVoteType');

module.exports = {
  insertUserVote,
  checkUserDidVote,
  checkUserDidVoteUpOrDown,
  changeUserVoteType,
};
