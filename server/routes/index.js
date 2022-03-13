const router = require('express').Router();
const pages = require('./pages');
const api = require('./api');
const { clientError } = require('../controllers');

const privateFiles = [/\/html\/*/, /\/css\/*/, /\/js\/*/, /\/images\/*/];

router.use(privateFiles, clientError);
router.use(pages);
router.use('/api/v1', api);

module.exports = router;
