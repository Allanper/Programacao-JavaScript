const produtoService = require("./produto-service");


function cadastro(req, res) {
    let produtoDescricao = req.body.descricao;
    let produtoPreco = req.body.preco;
    let produtoImagem = req.body.imagem;

    let r = produtoService.cad(produtoDescricao, produtoPreco, produtoImagem)

    res.json(r);
}


async function lista(req, res) {
    res.json( await produtoService.listar())
}


function altera(req, res){
    let id = req.body.id;
    let produtoDescricao = req.body.descricao;
    let produtoImagem = req.body.imagem;
    let produtoPreco = req.body.preco

    let alt = produtoService.alterar(id, produtoDescricao, produtoImagem, produtoPreco);

    res.json(alt)
}

function del(req, res) {
    let id = req.body.id;

    let d = produtoService.deletar(id);

    res.send(d)
}



module.exports = {
    cadastro,
    lista, 
    altera,
    del
}