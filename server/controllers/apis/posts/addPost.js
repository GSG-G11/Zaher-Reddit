const { addPostQuery } = require('../../../database/queries');
const { addPostSchema } = require('../../../utils');
const { CustomErr } = require('../../error');

module.exports = async (req, res, next) => {
  const votes = 0;
  const { body: { title, content }, id: userId } = req;

  try {
    await addPostSchema.validateAsync(req.body);
    const { rows } = await addPostQuery({
      userId, title, content, votes,
    });
    res.status(201).json({ status: 201, message: 'Post Added', post: rows[0] });
  } catch (err) {
    err.details ? next(CustomErr(err.details[0].message, 400)) : next(err);
  }
};
