const userServices = require('../services/service');

let users = [ {username:"Pedro", password:"123"}]

function auth (req, res) {
    let username = req.body.username;
    let password = req.body.password;
  
   let r = userServices.auth(username,password)
  
   res.json(r)
  
  }

  function cadastro(req, res) {
    
    let id = req.body.id
    let username = req.body.username
    let password = req.body.password
    let r = userServices.cad(id,username,password)
  
    res.json(r)
     
}

function lista(req, res) {
    

    res.json(userServices.listar())
     
}

function altera(req, res) {
    
    let id = req.body.id
    let username = req.body.username
    let password = req.body.password
    
    let r = userServices.alterar(id,username,password)

    res.json(r)

}

function del(req, res) {
  let id = req.body.id;
  let d = userServices.deletar(id)

  res.send(d)
}


  
  module.exports = {
    auth, cadastro, lista, altera, del
  }