const dbConnection = require('../../config/connections');

module.exports = (email) => dbConnection.query(`
  SELECT CAST(CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END AS BIT)
  FROM users WHERE email = $1;
`, [email]);
