class ClienteService {
    cadastrar(cli){
        console.log("Salvando Cliente Nome: " + cli.nome);
    }

    excluir(cli) {
        console.log("excluindo Cliente Id: " + cli.id)
    }
}


let pessoa1 = new ClienteService();

pessoa1.cadastrar({ nome: "Thiago Silva "});
pessoa1.excluir({ id: 10 });

let pessoa2 = new ClienteService();
pessoa2.cadastrar({nome: "Junior"});
pessoa2.excluir({id: 13});