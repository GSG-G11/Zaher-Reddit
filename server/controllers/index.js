const { clientError, serverError } = require('./error');
const { getLoginPage, getSignupPage } = require('./pages');
const { signupHandler } = require('./apis');

module.exports = {
  clientError,
  serverError,
  getLoginPage,
  getSignupPage,
  signupHandler,
};
