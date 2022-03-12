const { join } = require('path');

module.exports = (req, res) => {
  res.status(404).sendFile(join(__dirname, '../../../views/html/404.html'));
};
