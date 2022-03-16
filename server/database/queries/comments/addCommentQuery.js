const dbConnection = require('../../config/connections');

module.exports = ({ userId, postId, content }) => dbConnection.query(`
  INSERT INTO comments (user_id, post_id, content) VALUES ($1, $2, $3) RETURNING *
`, [userId, postId, content]);
