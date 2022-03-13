const { join } = require('path');
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  express.static(join(__dirname, '../views')),
  compression(),
  cookieParser(),
  router,
]);

module.exports = app;
