const dbConnection = require('../../config/connections');

module.exports = (username) => dbConnection.query(`
  SELECT CAST(CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END AS BIT)
  FROM users WHERE name = $1;
`, [username]);
