var express = require('express');
var router = express.Router();

const user = require('../routes/users');
const shell = require('../routes/shells');

module.exports = () => {

  router.use('/', user());
  router.use('/shells', shell());

  return router;
}
