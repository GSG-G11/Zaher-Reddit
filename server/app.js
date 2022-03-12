const { join } = require('path');
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const router = require('./routes');

const app = express();

app.set('port', 3000);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(join(__dirname, '..', 'views')));
app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use(router);

module.exports = app;
