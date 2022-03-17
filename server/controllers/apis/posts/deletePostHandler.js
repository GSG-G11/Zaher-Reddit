const { deletePostQuery } = require('../../../database/queries');
const { CustomErr } = require('../../error');

module.exports = async (req, res, next) => {
  const { params: { postId }, id: userId } = req;

  try {
    const { rows } = await deletePostQuery({ postId, userId });
    if (!rows.length) throw CustomErr('There Is No Post', 400);
    res.json({ message: 'Post Deleted Successfully', status: 200, post: rows[0] });
  } catch (err) {
    next(err);
  }
};
