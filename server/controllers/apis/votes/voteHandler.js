const {
  checkUserDidVote,
  insertUserVote,
  checkUserDidVoteUpOrDown,
  changeUserVoteType,
} = require('../../../database/queries');

module.exports = async (req, res, next) => {
  const { body: { postId, voteType }, id: userId } = req;

  try {
    const { rowCount } = await checkUserDidVote({ postId, userId });
    if (!rowCount) {
      await insertUserVote({ userId, postId, voteType });
      res.json({ message: 'Vote Added' });
    } else {
      const { rows } = await checkUserDidVoteUpOrDown({ userId, postId });
      const votedType = rows[0].type;
      if (votedType === voteType) {
        res.json({ message: 'Already voted' });
      } else {
        await changeUserVoteType({ userId, postId, voteType });
        res.json({ message: 'Vote Updated' });
      }
    }
  } catch (err) {
    next(err);
  }
};
