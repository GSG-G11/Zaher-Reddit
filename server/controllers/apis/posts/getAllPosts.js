const { getAllPostsQuery } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { rows } = await getAllPostsQuery();
    res.json({ message: 'Successfully retrieved all posts', status: 200, posts: rows });
  } catch (err) {
    next(err);
  }
};
