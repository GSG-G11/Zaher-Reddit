const dbConnection = require('../../config/connections');

module.exports = (userId) => dbConnection.query('SELECT users.name FROM users WHERE id = $1', [userId]);
