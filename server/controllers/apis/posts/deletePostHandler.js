const { deletePostQuery } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  const { body: { postId }, id: userId } = req;

  try {
    const { rows } = await deletePostQuery({ postId, userId });
    res.json({ message: 'Post Deleted Successfully', status: 200, post: rows[0] });
  } catch (err) {
    next(err);
  }
};
