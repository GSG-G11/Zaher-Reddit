const dbConnection = require('../../config/connections');

module.exports = (userId) => dbConnection.query('SELECT * FROM posts WHERE user_id = $1', [userId]);
