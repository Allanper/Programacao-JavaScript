const User = require('../model/User')


function autenticar(username, password) {
  let exists =  User.findOne({username, password})
  
  return exists;  // true, false
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

async function  alterar(id, username, password) {

  await User.findByIdAndUpdate(id, {username, password})
  return { msg: "Alterado com sucesso "};
}

async function deletar(id) {

    await User.findByIdAndRemove(id)
    return " Deletado com sucesso!";
 
}

module.exports = {
  autenticar,
  cadastrar,
  listar,
  alterar,
  deletar,
};
