//1) faça um array e armazene 20 números manualmente, exiba todos eles na tela com um loop FOR.
/*
let arreyNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for(let i = 0; i < arreyNumeros.length; i++){
    console.log(`nota ${i+1} = ${arreyNumeros[i]}`);
}
*/

//-----------------------------------------------------------------------------------------------------------------------

//2) faça um array e armazene 10 números, exiba apenas os pares.

/*
let arreyNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for( let i =0; i < arreyNumeros.length; i++) {
    if( i%2 == 0) {
      console.log( i + " é um numero Par!!")
    }
}

*/

// ----------------------------------------------------------------------------------------------------------------------

//3) faça um array e armazene 10 números, exiba apenas os ímpares
/*

let arreyNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i = 0; i < arreyNumeros.length; i++) {
  if( i%2 == 1 ){
     console.log( i + " é um numero Impar!")
  }
}

*/


// ----------------------------------------------------------------------------------------------------------------------

//4) faça um array e armazene 10 números, descubra e exiba o maior número do array
/*
let arreyNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maiorNumero = 0

for(i = 0; i < arreyNumeros.length; i++) {
  
  var numero = arreyNumeros[i];

   if(numero > maiorNumero){
    maiorNumero = numero;
   } 
}

console.log( "o Maior numero é: "+ maiorNumero);
*/

// ----------------------------------------------------------------------------------------------------------------------

//5) faça um array e armazene 10 números, descubra e exiba o menor número do array

/*
let arreyNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let menorNumero = Infinity;

for( i = 0; i < arreyNumeros.length; i++ ){
  let numero = arreyNumeros[i];

  if( numero < menorNumero ) {
    menorNumero = numero;
  }
}
console.log(" O menor numero é: " + menorNumero);

*/

// ----------------------------------------------------------------------------------------------------------------------

// 6) faça uma array e armazene 10 números, calcule e exiba a média dos  numeros do array;

let arreyNumeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let qtdVezes = 0;
let somaNumeros = 0;


for (i = 0; i < arreyNumeros.length; i++) {
  somaNumeros = arreyNumeros[i] + somaNumeros;
  qtdVezes++
}
let media = somaNumeros / qtdVezes;



console.log(" A media da soma desse Arrey é: " + media);
