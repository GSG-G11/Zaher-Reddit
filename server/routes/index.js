const router = require('express').Router();
const pages = require('./pages');
const api = require('./api');
const { clientError, serverError } = require('../controllers');

router.use('/api/v1', api);
router.use(pages);
router.use(clientError);
router.use(serverError);

module.exports = router;
