const Shell = require('../services/Shell');

exports.getAllShells = async (req, res) => {

  const response = await Shell.getAllShells();

  res.status(200).send(response);
}

exports.getShell = async (req, res) => {
  
  const id = req.params.id;

  const response = await Shell.getShell(id);

  res.status(200).send(response);
}

exports.addShell = async (req, res) => {

  const payload = req.body;

  const response = await Shell.addShell(payload);

  res.status(200).send (response);
}

exports.updateShell = async (req, res) => {
  
  const id = req.params.id;
  const payload = req.body;

  const response = await Shell.updateShell(id, payload);

  res.status(200).send(response);

}

/*  */
exports.deleteShell = async (req, res) => {

  const id = req.params.id;

  const response = await Shell.deleteShell(id);

  res.status(200).send(response);
}
