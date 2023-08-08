/* Exercicio 03
Faca um programa nodejs exercicio03.js que recebe a 3 notas de alunos como parametros, calcule a media e  retorn uma string dizendo se o aluno foi "aprovador","reprovado" ou "exame final". (crie seu proprio critério de notas) */

function media(n1, n2, n3){
    let m = (n1 + n2 + n3) / 3;

    if( m < 4) {
    return "Aluno esta Reprovado";
    }
    else if(m > 4 || m< 7){
    return "Exame Final"
    }
    else{
        return "Aluno Aprovado"
    }
}


let aluno1 = media(10,10,10);
// console.log(aluno1) // Aluno Aprovado.

let aluno2 = media(6, 6, 6);
//console.log(aluno2); // Exame Final.

let aluno3 = media(4, 4, 4);
console.log(aluno3);