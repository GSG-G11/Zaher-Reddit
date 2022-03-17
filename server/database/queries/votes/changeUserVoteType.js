const dbConnection = require('../../config/connections');

module.exports = ({ userId, postId, voteType }) => dbConnection.query(`
  UPDATE votes SET type = $1 WHERE user_id = $2 AND post_id = $3 RETURNING *
`, [voteType, userId, postId]);
