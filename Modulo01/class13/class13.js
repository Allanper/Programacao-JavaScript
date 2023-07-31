/* let sair= "nao"
let c = 0
while (sair=="nao"){
    console.log("Estou no loop mais uma vez")
    c++
    sair = prompt("Deseja Sair? sim | nao")
}
console.log("O loop foi realizador por "+ c + " vezes")


*/

//-------------------------------------------------------------
/** 
 * Faça um programa que leia uma quantidade n de números,  some a quantidade de números pares e ímpares digitados e 
 * exiba no final o resultado 
 
                                                   FINALIZADO!!!
let sair = "nao";
let c = 0 ;
let par = 0;
let impar = 0;

while (sair == "nao") {
    let num = prompt("digite um numero inteiro")
    if(num%2 == 0){
        console.log("par")
        par += 1;
    }
    else {
        console.log("impar") 
            impar += 1;
    }
    c++
    sair = prompt("deseja sair? sim | nao ")
}
    console.log("o loop foi realizado por " + c + " vezes")
    console.log("o numero par foi impresso " + par + " vezes")
    console.log("o numero impar foi impresso " + impar + "vezes")
*/
//-------------------------------------------------------------



/** 
 * - Faça um programa que leia uma quantidade n de números,  some a quantidade de números pares e ímpares digitados e 
 * calcula a média de todos os números digitados, exiba no final o resultado 
 * 
  
 let out = "nao";
 let cont = 0; 
 let numerosImpares = 0;
 let numerosPares = 0;
 let media;
                                                       FINALIZADO!!!!!
while (out == "nao") {
    let num =  prompt("digite um numero inteiro")
    if(num%2 == 0){
        console.log("esse numero é par")
       numerosPares = numerosPares + 1;
    } else {
        console.log("esse numero é impar")
        numerosImpares = numerosImpares + 1;
    }
    cont++
    out = prompt("deseja  sair agora?  Sim | nao");
    media = numerosPares + numerosImpares / cont;
}

console.log("media dos numeros Calculados é: "+ media);
console.log("a quantidade de numeros pares são: "+ numerosPares);
console.log("a quantidade de numeros Impares São: "+ numerosImpares);
//-------------------------------------------------------------
*/



/** 
 * - Faça um programa que leia uma quantidade n de número,  some a quantidade de números pares e ímpares digitados, e 
 calcula a média de todos os números digitados, a media dos pares e media dos impares, exiba  no final o todos as somas como resultado 
 * 
*/

var numerosPares = 0;
var somarPares = 0;
var numerosImpares = 0;
var somarImpares = 0;
var saida = "nao";


while(saida == "nao") {
    var num = prompt("Digite um numero inteiro");

    if(num%2==0){
        numerosPares = numerosPares + 1;
        somarPares = somarPares + parseFloat(num);
        console.log(somarPares)
    }
    else {
        numerosImpares = numerosImpares + 1;
        somarImpares = somarImpares + parseFloat(num);
        console.log(somarImpares);
    }
    saida = prompt( "Deseja sair??!  SIM | NAO " )
}
console.log(" A média dos números digitados é: " + (somarImpares + somarPares) / (numerosPares + numerosImpares))



//-------------------------------------------------------------








/** 
 * - Faça um programa que leia uma quantidade n de número, calcule e   exiba  a tabuada de cada numero digitado 
 */

//digite um numero:7 (7x1=1 7x2 =14 ... 7x10=70)
//deseja sair ? nao 
//digite um numero:8 (8x1=8, 8x2=16 ... 8x10=80)
//deseja sair? nao
//digite um numero:5 (5x1=5, 5x2=10 ... 5x10=50)
//deseja sair? sim
let resposta = "sim";

while( resposta == "sim" ) {
    let num = prompt("Digite um numero ");

    for(contador=0; contador<11; contador++){
        console.log(contador+ "x" + num + "=" + contador * num)
    }
    resposta = prompt("Gostaria de Digitar um novo Numero? sim | nao")
}
console.log("Obrigado Por calcular!!")
//------------------------------------------------------------  