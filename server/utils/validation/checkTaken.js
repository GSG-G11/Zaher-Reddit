const { CustomErr } = require('../../controllers/error');

module.exports = (inputTaken, input, failureMessage, cb) => {
  if (!inputTaken) {
    return cb(input, 10);
  }
  throw CustomErr(failureMessage, 409);
};
