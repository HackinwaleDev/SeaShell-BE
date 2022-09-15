var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


module.exports = (config) => {
  var app = express();

  /* Setup CORS options */
  const corsOption = {
    origin: true,
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
  }

  app.use(cors(corsOption));
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  return app;
}
