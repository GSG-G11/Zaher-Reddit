const apiRouter = require('express').Router();

const {
  signupHandler,
  loginHandler,
  handleLogout,
  getUsername,
  getAllPosts,
  getUserPosts,
  addPost,
  getPostVotes,
  vote,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.get('/posts', getAllPosts);
apiRouter.get('/votes/:id', getPostVotes);
apiRouter.post('/signup', signupHandler);
apiRouter.post('/login', loginHandler);
apiRouter.get('/user/:id', getUsername);
apiRouter.get('/user-posts/:userId', getUserPosts);
apiRouter.use(checkLoggedIn);
apiRouter.get('/user', getUsername);
apiRouter.post('/post', addPost);
apiRouter.put('/vote', vote);
apiRouter.delete('/logout', handleLogout);

module.exports = apiRouter;
