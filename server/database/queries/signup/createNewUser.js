const dbConnection = require('../../config/connections');

module.exports = ({ username, email, password }) => dbConnection.query(`
  INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING users.id;
`, [username, email, password]);
