const dbConnection = require('../../config/connections');

module.exports = ({ userId, postId, voteType }) => dbConnection.query(`
  INSERT INTO votes (user_id, post_id, type) VALUES ($1, $2, $3)
`, [userId, postId, voteType]);
