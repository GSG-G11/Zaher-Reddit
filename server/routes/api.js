const apiRouter = require('express').Router();

const {
  signupHandler,
  loginHandler,
  handleLogout,
  getUsername,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.post('/signup', signupHandler);
apiRouter.post('/login', loginHandler);
apiRouter.use(checkLoggedIn);
apiRouter.get('/user', getUsername);
apiRouter.delete('/logout', handleLogout);

module.exports = apiRouter;
