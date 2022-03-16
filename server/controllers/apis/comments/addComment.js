const { addCommentQuery } = require('../../../database/queries');
const { addCommentSchema } = require('../../../utils');
const { CustomErr } = require('../../error');

module.exports = async (req, res, next) => {
  const { body: { content, postId }, id: userId } = req;

  try {
    await addCommentSchema.validateAsync(content);
    const { rows } = await addCommentQuery({ postId, userId, content });
    res.status(201).json({ message: 'Comment added successfully', status: 201, comment: rows[0] });
  } catch (err) {
    err.details ? next(CustomErr(err.message, 400)) : next(err);
  }
};
