const dbConnection = require('../../config/connections');

module.exports = (username) => dbConnection.query(`
  SELECT * FROM users WHERE name = $1;
`, [username]);
