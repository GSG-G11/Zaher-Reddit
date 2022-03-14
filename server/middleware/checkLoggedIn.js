const { CustomErr } = require('../controllers/error');
const { verifyToken } = require('../utils');

module.exports = async (req, res, next) => {
  const { cookies } = req;

  try {
    if (!cookies) throw CustomErr('Unauthorized', 401);
    const { access_token: token } = cookies;
    if (!token) throw CustomErr('Unauthorized', 401);
    const user = await verifyToken(token);
    req.id = user.id;
    next();
  } catch (err) {
    if (err.toString().includes('JsonWebTokenError')) {
      next(CustomErr(err.message, 401));
    } else {
      next(err);
    }
  }
};
