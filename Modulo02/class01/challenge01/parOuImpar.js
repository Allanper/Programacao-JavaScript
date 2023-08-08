/*
Faça um programa nodejs exercicio02.js em javascript contendo uma função que recebe um numero como parametro e retorne um valor booleano para  dizer se é par ou ímpar
*/

function parOuImpar(n1){
    if( n1 % 2 == 0){
       return true
    }
    else {
       return false;
    }
}


let numero1 = parOuImpar(10);
// console.log(numero1);// true

let numero2 = parOuImpar(11);
// console.log(numero2); // false

let numero3 = parOuImpar(13);
// console.log(numero3); // false

let numero4 = parOuImpar(14);
// console.log(numero4); // true