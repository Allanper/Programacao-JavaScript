const User = require("../model/User");
const jwt = require("jsonwebtoken");

async function autenticar(username, password) {
  let userAutenticado = await User.findOne({ username, password });

  if (userAutenticado) {
    let token = jwt.sign(
      { _id: userAutenticado._id, username: userAutenticado.username },
      "banana-nanica",
      {
        expiresIn: 60 * 20,
      }
    );
    return { token };
  } else {
    return { erro: "usuário nao encontrado" };
  }
}

function cadastrar(username, password) {
  const u = new User({ username, password }); //username:username , password: password

  u.save()
    .then(() => {
      return { msg: "Cadastrado com Sucesso" };
    })
    .catch((error) => error);
}

async function listar() {
  return await User.find({});
}

async function alterar(id, username, password) {
  await User.findByIdAndUpdate(id, { username, password });
  return { msg: "Alterado com sucesso " };
}

async function deletar(id) {
  await User.findByIdAndRemove(id);
  return " Deletado com sucesso!";
}

module.exports = {
  autenticar,
  cadastrar,
  listar,
  alterar,
  deletar,
};
