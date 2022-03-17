const dbConnection = require('../../config/connections');

module.exports = ({ userId, postId }) => dbConnection.query(`
  SELECT type FROM votes WHERE user_id = $1 AND post_id = $2
`, [userId, postId]);
