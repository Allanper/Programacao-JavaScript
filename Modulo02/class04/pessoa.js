const pessoa = {
    nome: "Thiago",
    apelido: "Silva Santos",
    idade: 42, 
    nomeCompleto: function(){
        return this.nome +" "+ this.apelido;
    }
}

module.exports = pessoa;