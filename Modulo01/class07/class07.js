const firstDiv = document.querySelector(".main-screen");
const ResultDiv = document.querySelector(".resultado");


//criar contador; 
let contadorAprovado = 0;
let contadorReprovado = 0;
let contadorRecuperacao = 0;

//fFunction to switch navigation forms: 
function go(currentStep,nextStep) {
    let dNone, dBlock;
    if(currentStep == 1 ) {
        dNone = firstDiv;
    }
    else {
        dNone = ResultDiv;
    }
    dNone.style.display = "none";
// -----------------------------------------
    if(nextStep == 1) {
        dBlock = firstDiv;
    }
    else {
        dBlock = ResultDiv;
    }
    dBlock.style.display = "block";
}

//função para Atualizar os votos:
function atualizarVotos() {
    document.getElementById("reprovados").innerText = contadorReprovado;
    document.getElementById("aprovados").innerText = contadorAprovado;
    document.getElementById("recuperacao").innerText = contadorRecuperacao;
}

function limparDados() {
    
    document.getElementById("grade1").value = ("");
    document.getElementById("grade2").value = ("");
    document.getElementById("grade3").value = ("");
}

function validate() {
    const grade1 = document.getElementById("grade1");
    const grade2 = document.getElementById("grade2");
    const grade3 = document.getElementById("grade3");

    grade1.style.border = "none";
    grade2.style.border = "none";
    grade3.style.border = "none";

    if(!grade1.value || !grade2.value || !grade3.value) {
        if((!grade1.value) && (!grade2.value) && (!grade3.value)) {
            grade1.style.border = "2px solid red";
            grade2.style.border = "2px solid red";
            grade3.style.border = "2px solid red";
        }
        else if((!grade1.value) && (!grade2.value) ) {
            grade1.style.border = "2px solid red";
            grade2.style.border = "2px solid red";
        }
        else if((!grade1.value) && (!grade3.value)) {
            grade1.style.border = "2px solid red";
            grade3.style.border = "2px solid red";
        }
        else {
            grade2.style.border = "2px solid red";
            grade3.style.border = "2px solid red";
        }

    }
    else {
        let mediaOfThree = (parseFloat(grade1.value) + parseFloat(grade2.value) + parseFloat(grade3.value)) / 3;

        const result = document.getElementById("resultado");

        if(mediaOfThree >= 7) {
            result.style.color = "green";
            result.innerHTML = "Aprovado";
            contadorAprovado = contadorAprovado + 1;
            atualizarVotos();
        }
        else if(mediaOfThree> 4 && mediaOfThree < 7) {
            result.style.color = "yellow";
            result.innerHTML = "Prova Final";
            contadorRecuperacao = contadorRecuperacao + 1;
            atualizarVotos();
        }
        else {
            result.style.color = "red";
            result.innerHTML = "Reprovado!";
            contadorRecuperacao = contadorAprovado + 1;
            atualizarVotos();
        }
        limparDados();
        go(1,2);
        
    }
}
