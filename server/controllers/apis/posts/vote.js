const { voteQuery } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  const { body: { postId, voteType }, id: userId } = req;

  try {
    await voteQuery({ postId, userId, voteType });
    res.end();
  } catch (err) {
    next(err);
  }
};
