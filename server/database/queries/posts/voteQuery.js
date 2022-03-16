const dbConnection = require('../../config/connections');

module.exports = ({ postId, userId, voteType }) => {
  let topQuery;
  if (voteType === 'up') {
    topQuery = `
    do $$
    declare
      vote_type VARCHAR(5) := 'up';
    begin
    `;
  } else if (voteType === 'down') {
    topQuery = `
    do $$
    declare
      vote_type VARCHAR(5) := 'down';
    begin
    `;
  }
  const sql = `
    IF vote_type = 'down' THEN
      IF EXISTS (SELECT FROM votes WHERE post_id = ${postId} AND user_id = ${userId} AND type = 'up') THEN
          UPDATE votes SET type = 'down' WHERE post_id = ${postId} AND user_id = ${userId};
      END IF;
    ELSE 
      IF EXISTS (SELECT FROM votes WHERE post_id = ${postId} AND user_id = ${userId} AND type = 'down') THEN
          UPDATE votes SET type = 'up' WHERE post_id = ${postId} AND user_id = ${userId};
        END IF;  
    END IF; 
  end $$
  `;
  return dbConnection.query(topQuery + sql);
};
