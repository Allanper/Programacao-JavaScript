const produtoService = require("../service/produto-service");


function cadastrar(req, res) {
    let produtoDescricao = req.body.descricao;
    let produtoPreco = req.body.preco;
    let produtoImagem = req.body.imagem;

    let r = produtoService.cadastrar(produtoDescricao, produtoPreco, produtoImagem)

    res.json(r);
}


async function listar(req, res) {
    res.json( await produtoService.listar())
}


function alterar(req, res){
    let id = req.body.id;
    let produtoDescricao = req.body.descricao;
    let produtoImagem = req.body.imagem;
    let produtoPreco = req.body.preco

    let alt = produtoService.alterar(id, produtoDescricao, produtoImagem, produtoPreco);

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