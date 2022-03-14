const { getAllPostsQuery } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { rows } = await getAllPostsQuery();
    res.json(rows);
  } catch (err) {
    next(err);
  }
};
