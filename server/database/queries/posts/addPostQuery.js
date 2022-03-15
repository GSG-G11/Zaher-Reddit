const dbConnection = require('../../config/connections');

module.exports = ({
  userId, title, content, votes,
}) => dbConnection.query(`
  INSERT INTO posts (user_id, title, content, votes) VALUES ($1, $2, $3, $4) RETURNING *
`, [userId, title, content, votes]);
