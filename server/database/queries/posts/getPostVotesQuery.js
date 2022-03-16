const dbConnection = require('../../config/connections');

module.exports = (postId) => dbConnection.query(`
  SELECT 
      (SELECT COUNT(*) FROM votes WHERE post_id = $1 AND type = 'up') 
    - (SELECT COUNT(*) FROM votes WHERE post_id = $1 AND type = 'down') AS votes
`, [postId]);
