const { getPostVotesQuery } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  const { id: postId } = req.params;

  try {
    const { rows } = await getPostVotesQuery(postId);
    const info = rows[0];
    res.json({ message: 'success', status: 200, info });
  } catch (err) {
    next(err);
  }
};
