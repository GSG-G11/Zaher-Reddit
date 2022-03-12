const { clientError, serverError } = require('./error');
const { getLoginPage, getSignupPage } = require('./pages');

module.exports = {
  clientError,
  serverError,
  getLoginPage,
  getSignupPage,
};
