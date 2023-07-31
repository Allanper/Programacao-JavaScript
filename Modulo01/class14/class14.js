//Nota entre 5 e 6 Exame
//Nota maior que 6 Aprovado
//Nota menor que 5 reprovado


//digite um nota: 5  (prompt)
//exame  (if)
//mais um aluno? sim

//digite uma nota: 6.1 
//aprovado (if)
//mais um aluno?sim

//digite um numero:3
//reprovado (if)
//mais um aluno?nao


//Resposta:
//Aprovados: 1
//Reprovados: 1
//Exame:1


//variaveis

//while () { 
    //digite um nota: 5  (prompt)
    //exame  (if)  //incremento
    //mais um aluno? sim
//}

//resposta



//Faça um programa que leia um numero N de notas, classifique entre 
//aprovado, reprovado e exame de acordo com os criterios de notas abaixo, e exiba
//como resultado o numero de aprovados, reprovados e exame. 

//Criterio
//Nota entre 5 e 6 Exame
//Nota maior que 6 Aprovado
//Nota menor que 5 reprovado

//Faça um programa que leia um numero N de notas, classifique entre aprovado, reprovado e exame de acordo com os criterios de notas:


function classificarNotas() {
    
        let repetir = "sim";
        let aprovados = 0;
        let reprovados = 0;
        let exame = 0;

        while(repetir == "sim"){
        let nota = prompt("Digite a Nota: ");

        if(nota < 5 ) {
            console.log("Aluno reprovado!!");
            reprovados++
        }
        else if( nota < 6 ){
            console.log("Aluno esta de Exame ");
            exame++
        }
        else {
            console.log("Aluno Aprovado!!");
            aprovados++
        }
        repetir = prompt("Gostaria de avaliar um novo Aluno? sim | nao");
    }
    console.log("Alunos Aprovados: "+ aprovados + "|" + " Alunos de Exame: "+ exame + "|" + " Alunos Reprovados: "+ reprovados );
    
    document.getElementById("saida").innerHTML = `
    Aprovados:  ${aprovados} | Reprovados: ${reprovados} | Exame: ${exame}`

}