const serviceUsuario = require("../Services/service");


function cadastra(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let r = serviceUsuario.cad(username, password);

    res.json(r)
}


module.exports = {
    cadastra
}