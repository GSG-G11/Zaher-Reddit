const { addPostQuery } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  const votes = 0;
  const { body: { title, content }, id: userId } = req;

  try {
    const { rows } = await addPostQuery({
      userId, title, content, votes,
    });
    res.status(201).json({ status: 201, message: 'Post Added', post: rows[0] });
  } catch (err) {
    next(err);
  }
};
