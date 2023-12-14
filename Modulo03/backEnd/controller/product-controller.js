const produtoService = require("../service/product-service");


function cadastrar(req, res) {

    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let imagem = req.body.imagem;
    let categoria = req.body.categoria;

    let r = produtoService.cadastrar(nome, descricao, preco, imagem, categoria)

    res.json(r);
}


async function listar(req, res) {
    res.json( await produtoService.listar())
}


function alterar(req, res){
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let imagem = req.body.imagem;
    let categoria = req.body.categoria;

    let alt = produtoService.alterar(id, nome, descricao, preco, imagem, categoria);

    res.json(alt)
}

function deletar(req, res) {
    let id = req.body.id;

    let d = produtoService.deletar(id);

    res.send(d)
}



module.exports = {
    cadastrar,
    listar, 
    alterar,
    deletar
}