const apiRouter = require('express').Router();

const {
  signupHandler,
  loginHandler,
  handleLogout,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.post('/signup', signupHandler);
apiRouter.post('/login', loginHandler);
apiRouter.delete('/logout', checkLoggedIn, handleLogout);

module.exports = apiRouter;
