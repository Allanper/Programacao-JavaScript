const Produto = require('./model/Produto');

function cad(produtoDescricao, produtoImagem, produtoPreco) {
    let novoProduto = { produtoDescricao, produtoImagem, produtoPreco} ;

    const produto = new Produto({ produtoDescricao, produtoImagem,produtoPreco})

    produto.save()
    .then(() => {
        return { msg: "Cadastrado com Sucesso"};
    })
    .catch((error) => error)
}


async function listar() {
    return  await Produto.find({});
}



async function alterar(id, produtoDescricao, produtoPreco, produtoImagem) {
    await Produto.findByIdAndUpdate(id, {produtoDescricao, produtoImagem, produtoPreco})
    return { msg: "Alterado com sucesso"};


}

async function deletar(id) {
 await Produto.findByIdAndRemove(id)

 return "Deletado Com Sucesso! "
}





 module.exports = {
    cad,
    listar,
    alterar,
    deletar
 }


