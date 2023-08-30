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

function editar( id, nome, marca, cor, ano, preco ){
    let index = produtos.findIndex(u => u.id == id)

    let ObjEncontrado = produtos[index];

    ObjEncontrado.nome = nome;
    ObjEncontrado.marca = marca;
    ObjEncontrado.cor = cor;
    ObjEncontrado.ano = ano;
    ObjEncontrado.preco = preco;

    return ObjEncontrado;
}

function excluir(id) {
    let index = produtos.findIndex( u => u.id == id )

    if( index !== -1){
        produtos.splice(index, 1)
        return "usuario deletado com Sucesso!"
    }else {
        return "Usuario Nao encontrado"
    }
}






module.exports = {
    cadastrar,
    listar,
    editar, 
    excluir
}