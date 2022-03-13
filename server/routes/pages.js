const pagesRouter = require('express').Router();

const {
  getLoginPage,
  getSignupPage,
} = require('../controllers');

pagesRouter.get('/login', getLoginPage);
pagesRouter.get('/signup', getSignupPage);

module.exports = pagesRouter;
