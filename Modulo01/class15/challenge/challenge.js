let qtdAluno = 0;
let media = 0;
let alunosReprovados = 0;
let alunosAprovados = 0;
let alunosExame = 0;

function limparCampos() {
    document.getElementById("nome").value  = ("");
    document.getElementById("nota1").value = ("");
    document.getElementById("nota2").value = ("");
    document.getElementById("nota3").value = ("");
}


function lancarNota() {
        qtdAluno = qtdAluno + 1;
        resultado();
        limparCampos();
        
} 

function resultado() {
        let aluno = document.getElementById("nome").value;
        let n1 = document.getElementById("nota1").value;
        let n2 = document.getElementById("nota2").value;
        let n3 = document.getElementById("nota3").value;

    let media = (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;
    if( media < 4 ){
        alunosReprovados++;
    }
    else if(media > 6) {
        alunosAprovados++;
    }
    else {
        alunosExame++;
    }
        
        /*alert("Media do aluno: " + nomeAluno + "é : "+ media);
        calcularNota = prompt("gostaria de inserir novo Aluno? sim | nao")*/

        let ResFinal = `
                  Média do aluno:${aluno} é: ${media}|
                  Total de Alunos:${qtdAluno}| 
                  Total Aprovados ${alunosAprovados}|
                  Total Reprovados${alunosReprovados}|
                  Total Exame ${alunosExame}`
document.getElementById("saida").innerHTML =ResFinal
}



/*            
--------------------------------------------   FORMA VIA CONSOLE   ---------------------------------------- 


//Faça um prog. que leia 3 notas de N alunos ----- OK
//calcule a media de cada aluno ------ OK
//calcule e exiba a quantidade de aprovados(entre 6 e 10), a quantidade de reaprovados (menor que 4), a quantidade de prova final (entre 4.1 e 5.9). -------------------- OK

let alunosCalculados = 0;
let alunosAprovados = 0;
let alunosReprovados = 0;
let alunosExame = 0;

do{
    let nota1 = prompt("Digite a Primeira Nota: ");
    console.log(nota1);

    let nota2 = prompt("Digite a segunda Nota: ");
    console.log(nota2);

    let nota3 = prompt("Digite a terceira Nota: ");
    console.log(nota3);

    let media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    
    if( media < 4 ){
        console.log("A media desse aluno é: "+ media +". Aluno Reprovado!!");
        alunosReprovados++;

    }else if(media > 6) {
        console.log("A media desse aluno é: "+ media+". Aluno Aprovado!!");
        alunosAprovados++;

    }else {
        console.log("A media desse aluno é: "+ media + ". Aluno esta de Exame!");
        alunosExame++;
    }


    alunosCalculados = alunosCalculados + 1;
    
    
    var pergunta = prompt("Gostaria de Avaliar novo Aluno?: Sim | Nao ");
    
    console.log(alunosCalculados + " Alunos Foram Calculados!");
    console.log(alunosAprovados + " Alunos Foram Aprovados!");
    console.log(alunosReprovados + " Alunos Foram Reprovados! ");
    console.log(alunosExame + " Alunos Estão de Exame!");
    
}
while(pergunta=="sim")

*/



