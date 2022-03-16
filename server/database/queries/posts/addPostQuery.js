const dbConnection = require('../../config/connections');

module.exports = ({
  userId, title, content,
}) => dbConnection.query(`
  INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *
`, [userId, title, content]);
