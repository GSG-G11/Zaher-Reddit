const pagesRouter = require('express').Router();

const {
  getLoginPage,
  getSignupPage,
  getProfilePage,
} = require('../controllers');

pagesRouter.get('/login', getLoginPage);
pagesRouter.get('/signup', getSignupPage);
pagesRouter.get('/users/:id', getProfilePage);

module.exports = pagesRouter;
