const dbConnection = require('../../config/connections');

module.exports = ({ postId, userId }) => dbConnection.query('SELECT * FROM votes WHERE post_id = $1 AND user_id = $2', [postId, userId]);
