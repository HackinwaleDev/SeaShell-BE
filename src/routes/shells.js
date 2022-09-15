const express = require('express');
const router = express.Router();

// import methods from Shell controller here
const {
  getAllShells,
  addShell,
  updateShell,
  deleteShell
} = require('../controller/Shell');

module.exports = () => {

  // GET all shells 
  router.get('/', getAllShells);

  router.post('/', addShell);

  router.put('/:id', updateShell);

  router.delete('/:id', deleteShell);

  return router;
}