const serviceUsuario = require("../Services/service");


function cadastra(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let r = serviceUsuario.cad(username, password);

    res.json(r)
}

function lista(req,res) {

    res.json(serviceUsuario.listar())
}

function altera(req, res) {
   let id = req.body.id
   let username = req.body.username;
   let password  = req.body.password;

   let a = serviceUsuario.editar(id, username, password);

   res.json(a)
}

function exclui(req, res){
    let id = req.body.id;

   let e = serviceUsuario.excluir(id)
   res.send(e)
}

module.exports = {
    cadastra,
    lista,
    altera,
    exclui
}