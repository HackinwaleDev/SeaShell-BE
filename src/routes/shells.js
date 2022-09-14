const express = require('express');
const router = express.Router();

// import the shell controller here
const ShellController = require('../controller/Shell');

module.exports = () => {

  // GET all shells 
  router.get('/', ShellController.getAllShells);

  return router;
}