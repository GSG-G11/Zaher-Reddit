const { getUsernameQuery } = require('../../../database/queries');
const { CustomErr } = require('../../error');

module.exports = async (req, res, next) => {
  let userId;
  if (req.id) {
    userId = req.id;
  } else {
    userId = req.params.id;
  }

  try {
    const { rows } = await getUsernameQuery(userId);
    const userExists = rows.length;
    if (!userExists) throw CustomErr('No Such User', 400);
    const username = rows[0].name;
    res.json({
      message: 'User found', status: 200, name: username, id: userId,
    });
  } catch (err) {
    next(err);
  }
};
