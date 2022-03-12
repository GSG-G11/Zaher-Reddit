const { readFileSync } = require('fs');
const { join } = require('path');
const dbConnection = require('../connections');

module.exports = () => {
  const query = readFileSync(join(__dirname, '../build/init.sql'))
              + readFileSync(join(__dirname, '../build/fakeData.sql'));
  return dbConnection.query(query);
};
