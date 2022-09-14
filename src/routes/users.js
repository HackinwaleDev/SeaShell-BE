var express = require('express');
var router = express.Router();

// import controller to handle the routes here 
const ShellController = require('../controller/Shell');

module.exports = () => {
/* GET API test response. */
  router.get('/', function(req, res, next) {
    res.send('The endpoint is tested and working!!!');
  });

  return router;
}

