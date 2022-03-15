const { getUserPosts } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { rows } = await getUserPosts(userId);
    if (rows.length) {
      if (req.id) {
        res.json({ message: 'Success', posts: rows, your_posts: true });
      } else {
        res.json({ message: 'Success', posts: rows });
      }
    } else {
      res.json({ message: 'No Posts' });
    }
  } catch (err) {
    next(err);
  }
};
