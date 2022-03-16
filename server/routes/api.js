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
  getPostComments,
  addComment,
} = require('../controllers');

const { checkLoggedIn } = require('../middleware');

apiRouter.get('/posts', getAllPosts);
apiRouter.get('/votes/:id', getPostVotes);
apiRouter.post('/signup', signupHandler);
apiRouter.post('/login', loginHandler);
apiRouter.get('/user/:id', getUsername);
apiRouter.get('/user-posts/:userId', getUserPosts);
apiRouter.get('/comments/:postId', getPostComments);
apiRouter.use(checkLoggedIn);
apiRouter.get('/user', getUsername);
apiRouter.post('/post', addPost);
apiRouter.post('/comment', addComment);
apiRouter.put('/vote', vote);
apiRouter.delete('/logout', handleLogout);

module.exports = apiRouter;
