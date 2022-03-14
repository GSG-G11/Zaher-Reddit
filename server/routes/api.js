const apiRouter = require('express').Router();

const {
  signupHandler,
  loginHandler,
  handleLogout,
  getUsername,
  getAllPosts,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.get('/posts', getAllPosts);
apiRouter.post('/signup', signupHandler);
apiRouter.post('/login', loginHandler);
apiRouter.use(checkLoggedIn);
apiRouter.get('/user', getUsername);
apiRouter.delete('/logout', handleLogout);

module.exports = apiRouter;
