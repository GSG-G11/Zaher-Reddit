const apiRouter = require('express').Router();

const { signupHandler } = require('../controllers');

apiRouter.post('/signup', signupHandler);

module.exports = apiRouter;
