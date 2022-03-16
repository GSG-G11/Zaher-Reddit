const dbConnection = require('../../config/connections');

module.exports = (postId) => dbConnection.query('SELECT * FROM comments WHERE post_id = $1', [postId]);
