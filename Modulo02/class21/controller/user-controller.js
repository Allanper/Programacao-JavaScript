const userServices = require("../service/user-service");

async function autenticar(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  let r = await userServices.autenticar(username, password);
  if (r.token) {
    res.json(r);
  } else {
    res.sendStatus(401);
  }
}

function cadastrar(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  let r = userServices.cadastrar(username, password);

  res.json(r);
}

async function listar(req, res) {
  res.json(await userServices.listar());
}

async function alterar(req, res) {
  let id = req.body.id;
  let username = req.body.username;
  let password = req.body.password;

  let r = await userServices.alterar(id, username, password);

  res.json(r);
}

async function deletar(req, res) {
  let id = req.body.id;

  let r = await userServices.deletar(id);

  res.send(r);
}

module.exports = {
  autenticar,
  cadastrar,
  listar,
  alterar,
  deletar,
};
