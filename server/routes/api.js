const apiRouter = require('express').Router();

const {
  signupHandler,
  loginHandler,
  handleLogout,
  getUsername,
  getAllPosts,
  getUserPosts,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.get('/posts', getAllPosts);
apiRouter.post('/signup', signupHandler);
apiRouter.post('/login', loginHandler);
apiRouter.get('/user/:id', getUsername);
apiRouter.get('/user-posts/:userId', getUserPosts);
apiRouter.use(checkLoggedIn);
apiRouter.get('/user', getUsername);
apiRouter.delete('/logout', handleLogout);

module.exports = apiRouter;
