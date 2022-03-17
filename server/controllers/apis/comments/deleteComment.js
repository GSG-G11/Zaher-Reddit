const { deleteCommentQuery } = require('../../../database/queries');
const { CustomErr } = require('../../error');

module.exports = async (req, res, next) => {
  const { params: { commentId }, id: userId } = req;

  try {
    const { rows } = await deleteCommentQuery({ userId, commentId });
    if (!rows.length) throw CustomErr('There Is No Comment', 400);
    res.json({ message: 'Comment Successfully Deleted', status: 200, comment: rows[0] });
  } catch (err) {
    next(err);
  }
};
