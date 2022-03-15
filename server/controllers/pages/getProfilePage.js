const { join } = require('path');

module.exports = (req, res, next) => {
  try {
    res.sendFile(join(__dirname, '../../../views/html/profile.html'));
  } catch (err) {
    next(err);
  }
};
