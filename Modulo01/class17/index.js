let nomeMaisNovo ="";
let nomeMaisVelho ="";
let idadeMaisNovo = 99999;
let idadeMaisVelho = 0;
let nomeAtual = '';
let idadeAtual = 0;


function cadastrarUsuario() {
    
    nomeAtual = document.getElementById('nome').value
    idadeAtual = parseInt(document.getElementById('idade').value)

   

    if(idadeAtual < idadeMaisNovo) {
        idadeMaisNovo= idadeAtual
        nomeMaisNovo = nomeAtual

    }
    if (idadeAtual > idadeMaisVelho) {
        idadeMaisVelho=idadeAtual
        nomeMaisVelho =nomeAtual
        
    }
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';

    document.getElementById('resultado').innerText = 'Usuário cadastrado: ' + nomeAtual + ', ' + idadeAtual;

    alert("Usuário cadastrado com sucesso")
}

function exibirMaisNovo(){
    if (nomeMaisNovo === "") {
    document.getElementById('resultado').innerHTML = 'nenhum usuário cadastrado'
    return;
}
document.getElementById('resultado').innerHTML = 'Usuário mais novo: ' + nomeMaisNovo + ', ' + idadeMaisNovo;
}

function exibirMaisVelho() {
    if (nomeMaisVelho === "") {
    document.getElementById('resultado').innerHTML = `nenhum usuário cadastrado`
    return;
    }
    document.getElementById('resultado').innerHTML = 'Usuário mais velho: ' + nomeMaisVelho + ', ' + idadeMaisVelho;
}