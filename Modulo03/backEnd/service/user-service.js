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

function cadastrar(username, fullname, age, email, password) {
  const u = new User({ username, fullname, age, email, password}); 

  u.save()
    .then(() => {
      return { msg: "Cadastrado com Sucesso" };
    })
    .catch((error) => error);
}

async function listar() {
  return await User.find({});
}

async function alterar(id, username, fullname, age, email, password) {
  let userData = { 
          username: (username !="") ? username : undefined, 
          fullname: (fullname !="") ? fullname : undefined, 
          age: (age !="") ? age : undefined, 
          email: (email!="") ? email : undefined, 
          password: (password !="") ? password : undefined,
  }
  await User.findByIdAndUpdate(id, userData);
  return { msg: "Alterado com sucesso " };
}

async function deletar(id) {
  try{
    await User.findByIdAndRemove(id);
    return " Deletado com sucesso!";
  } catch(error) {
    return error;
  } 
}

module.exports = {
  autenticar,
  cadastrar,
  listar,
  alterar,
  deletar,
};
