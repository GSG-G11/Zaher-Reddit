const { sign } = require('jsonwebtoken');

module.exports = (userId) => new Promise((resolve, reject) => {
  sign({ id: userId }, process.env.SECRET, (err, token) => {
    if (err) {
      return reject(err);
    }
    return resolve(token);
  });
});
