const { verify } = require('jsonwebtoken');

module.exports = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET, (err, match) => {
    if (err) return reject(err);
    return resolve(match);
  });
});
