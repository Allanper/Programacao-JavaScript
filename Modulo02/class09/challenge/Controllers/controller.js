const produroService = require('../Services/service')


function cad(req, res) {
    let id = req.body.id
    let nome = req.body.nome
    let marca = req.body.marca
    let cor = req.body.cor
    let ano = req.body.ano
    let preco = req.body.preco

    let novoCad = produroService.cadastrar(id, nome, marca, cor, ano, preco)

    res.json(novoCad)
}

function listAll( req, res) {
    let l = produroService.listar();

    res.json(l)
}







module.exports = {
    cad, listAll
}