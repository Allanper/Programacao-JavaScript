const userServices = require('./user-service');

let users = [ {username:"Pedro", password:"123"}]

function auth (req, res) {
    let username = req.body.username;
    let password = req.body.password;
  
   let r = userServices.auth(username,password)
  
   res.json(r)
  
  }

  function cadastro(req, res) {
    
    let username = req.body.username
    let password = req.body.password

  let r = userServices.cad(username, password)

  res.json(r)

}

async function lista(req, res) {
    

    res.json(await userServices.listar())
     
}

async function altera(req, res) {
    
    let id = req.body.id
    let username = req.body.username
    let password = req.body.password
    
    let r = await userServices.alterar(id,username,password)

    res.json(r)

}

async function deletarUsuario(req, res) {
  let id = req.body.id;

  let r = await userServices.deletar(id);

  res.send(r)
}


  
  module.exports = {
    auth, cadastro, lista, altera, deletarUsuario
  }