let produtos = [];

function cadastrar(id, nome, marca, cor, ano, preco){

    let novoProduto = {
        id, nome, marca, cor, ano, preco
    }
    produtos.push(novoProduto)

    return "cadastrado com Sucesso"
}

function listar() {
    return (produtos)
}







module.exports = {
    cadastrar,
    listar
}