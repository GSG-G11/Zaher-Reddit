const { getPostCommentsQuery } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const { rows } = await getPostCommentsQuery(postId);
    res.json({ message: 'success', status: 200, comments: rows });
  } catch (err) {
    next(err);
  }
};
