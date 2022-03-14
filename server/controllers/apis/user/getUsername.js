const { getUsernameQuery } = require('../../../database/queries');
const { CustomErr } = require('../../error');

module.exports = async (req, res, next) => {
  const userId = req.id;

  try {
    const { rows } = await getUsernameQuery(userId);
    const userExists = rows.length;
    if (!userExists) throw CustomErr('Your account has been deleted', 400);
    const username = rows[0].name;
    res.json({ name: username });
  } catch (err) {
    next(err);
  }
};
