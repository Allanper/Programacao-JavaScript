const Produto = require('../model/Product');

function cadastrar(nome, descricao, preco, imagem, categoria) {

    const produto = new Produto({nome, descricao, preco, imagem, categoria})

    produto.save()
    .then(() => {
        return { msg: "Cadastrado com Sucesso"};
    })
    .catch((error) => error)
}


async function listar() {
    return  await Product.find({});
}



async function alterar(id, nome, descricao, preco, imagem, categoria) {
    await Produto.findByIdAndUpdate(id, {nome, descricao, preco, imagem, categoria})
    return { msg: "Alterado com sucesso"};


}

async function deletar(id) {
 await Produto.findByIdAndRemove(id)

 return "Deletado Com Sucesso!"
}





 module.exports = {
    cadastrar,
    listar,
    alterar,
    deletar
 }


