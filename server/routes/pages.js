const pagesRouter = require('express').Router();

const {
  clientError,
  serverError,
  getLoginPage,
  getSignupPage,
} = require('../controllers');

pagesRouter.get('/login', getLoginPage);
pagesRouter.get('/signup', getSignupPage);
pagesRouter.use(clientError);
pagesRouter.use(serverError);

module.exports = pagesRouter;
