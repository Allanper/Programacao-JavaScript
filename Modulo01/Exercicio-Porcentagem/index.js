//the way to get each screen: 
const firstDiv = document.querySelector('.tela-inicio');
const secondDiv = document.querySelector('.tela-principal');
const finalDiv = document.querySelector('.tela-final');


//Function to switch navigation forms:
function go(currentStep, nextStep) {
    let dNone, dBlock;
    if(currentStep == 1) {
        dNone = firstDiv;
    }

    else if(currentStep == 2) {
        dNone = secondDiv;
    }

    else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';

    // ----------------------------

    if(nextStep == 1) {
        dBlock= firstDiv;
    }

    else if(nextStep == 2) {
        dBlock = secondDiv;
    }

    else {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}


function back(currentStep, backStep) {
    let dNone, dBlock;
    if(currentStep == 1) {
        dNone = firstDiv;
    }

    else if(currentStep == 2) {
        dNone = secondDiv;
    }

    else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';
    
    // ----------------------------

    if(backStep == 1) {
        dBlock= firstDiv;
    }

    else if(backStep == 2) {
        dBlock = secondDiv;
    }

    else {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block'

}






function validacao() {
    const valor = document.getElementById('valor');
    const porcentagem = document.getElementById('porcentagem');

    valor.style.border = "none";
    porcentagem.style.border = "none";

    if(!valor.value || !porcentagem.value || valor.value == 0 || porcentagem.value == 0) {
        if((!valor.value || valor == 0) && (!porcentagem.value || porcentagem.value == 0)) {
         valor.style.border = "2px solid red";
         porcentagem.style.border = "2px solid red";
        }
        else if(!valor.value || valor.value == 0) {
            valor.style.border = "2px solid red";
        }
        else {
            porcentagem.style.border = "2px solid red";
        }
    }

    else {
        let porcentagemOperacao = valor.value * (porcentagem.value) / 100;
        const result = document.getElementById("resultado");

        result.innerHTML = (`valor é: ${valor.value} | Porcentagem é: ${porcentagem.value} | Resultado da Operação: ${porcentagemOperacao}`);

        go(2,3)
    }
    
}