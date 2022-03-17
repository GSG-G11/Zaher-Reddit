const dbConnection = require('../../config/connections');

module.exports = ({ userId, commentId }) => dbConnection.query('DELETE FROM comments WHERE id = $1 AND user_id = $2 RETURNING *', [commentId, userId]);
