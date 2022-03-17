const dbConnection = require('../../config/connections');

module.exports = ({ postId, userId }) => dbConnection.query('DELETE FROM posts WHERE id = $1 AND user_id = $2 RETURNING *', [postId, userId]);
