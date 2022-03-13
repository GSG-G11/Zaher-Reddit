const { clientError, serverError } = require('./error');
const { getLoginPage, getSignupPage } = require('./pages');
const { signupHandler, loginHandler } = require('./apis');

module.exports = {
  clientError,
  serverError,
  getLoginPage,
  getSignupPage,
  signupHandler,
  loginHandler,
};
