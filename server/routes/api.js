const apiRouter = require('express').Router();

const { signupHandler, loginHandler } = require('../controllers');

apiRouter.post('/signup', signupHandler);
apiRouter.post('/login', loginHandler);

module.exports = apiRouter;
