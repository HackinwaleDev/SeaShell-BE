const Shell = require('../services/Shell');

exports.getAllShells = async (req, res) => {

  const result = await Shell.getAllShells();

  res.status(200).send(result);
}