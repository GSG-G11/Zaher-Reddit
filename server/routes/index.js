const router = require('express').Router();
const pages = require('./pages');
const api = require('./api');

router.use(pages);
router.use(api);
module.exports = router;
