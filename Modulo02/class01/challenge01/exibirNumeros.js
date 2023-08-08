/*
Exercicio 04
Faça um programa nodejs exercicio04.js em javascript contendo uma função que recebe um numero , adicione esse numero em um array e retorne o array contendo o novo numero. Pegue o retorno e exiba todos os numeros inserios utilizando um loop for.
*/


let arrey = [];


function addNumero(n1){
    arrey.push(n1)
   return arrey;
}

let m1 = addNumero(10);
m1 = addNumero(6)
m1 = addNumero(7)
m1 = addNumero(5)
m1 = addNumero(8)
m1 = addNumero(9)
m1 = addNumero(3)
m1 = addNumero(10)

for (i = 0; i < m1.length; i++){
    console.log(m1[i])
}