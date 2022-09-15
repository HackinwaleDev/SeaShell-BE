var express = require('express');
var router = express.Router();

const test = require('./test');
const shell = require('../routes/shells');

module.exports = () => {

  router.use('/', test());
  router.use('/shells', shell());

  return router;
}
