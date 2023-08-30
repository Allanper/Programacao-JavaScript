const produtoService = require('../Services/service')


function cad(req, res) {
    let id = req.body.id
    let nome = req.body.nome
    let marca = req.body.marca
    let cor = req.body.cor
    let ano = req.body.ano
    let preco = req.body.preco

    let novoCad = produtoService.cadastrar(id, nome, marca, cor, ano, preco)

    res.json(novoCad)
}

function listAll( req, res) {
    let l = produtoService.listar();

    res.json(l)
}

function editOne(req,res) {
    let id = req.body.id
    let nome = req.body.nome
    let marca = req.body.marca
    let cor = req.body.cor
    let ano = req.body.ano
    let preco = req.body.preco

    let eo = produtoService.editar(id, nome, marca, cor, ano, preco)

    res.json(eo);
}

function del( req, res) {
    let id = req.body.id;
    let d = produtoService.excluir(id)

    res.send(d)

}




module.exports = {
    cad, listAll, editOne, del
}