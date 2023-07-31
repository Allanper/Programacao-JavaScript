/* PRIMEIRA PARTE: 
//faça um programa que leia uma quantidade de numeros: 
let usuario = "sim";
let saida = "nao";

function operacoes(){
let num = input1.value;
console.log(num);
}
-------------------------------------- */










/* SEGUNDA PARTE: 

//some a quantidade de numeros pares e impares digitados: 
let numImpares = 0;
let numPares = 0;

function operacoes() {
    let num = parseInt(input1.value) ;
    console.log(num);
    if(num%2 == 0) {
        numPares = numPares + num;
        console.log("Esse numero é par!!!")
    } else {
        numImpares = numImpares + num;
        console.log("É um numero impar!!!")
    }
    console.log("A soma de todos os numeros é: "+ todosNumeros);
    console.log("A soma dos numeros pares digitados é : "+ numPares);
    console.log("A soma dos numeros Impares digitados é : "+ numImpares);
}
------------------------------------------------------*/
















//calcule a media de todos os numeros digitados, a media de pares e impares, e no final exiba tudo. 
let numImpares = 0;
let somarImpar = 0;
let mediaImpar = 0;

let numPares = 0;
let somarPar = 0;
let mediaPar = 0;

let todosNumeros = 0;
let mediaTodosNumeros = 0;
let NumerosInseridos = 0
let numerosSomados = 0;




function operacoes() {
    let num = parseFloat(input1.value) ;
    
    if(num%2 == 0) {
        somarPar = somarPar + 1; 
        numPares = numPares + num;
        console.log("Esse numero é par!!!");
        numerosSomados = numerosSomados + num; 
        NumerosInseridos = NumerosInseridos + 1
    } 
    else {
        somarImpar = somarImpar + 1;
        numImpares = numImpares + num;
        console.log("É um numero impar!!!")
        numerosSomados = numerosSomados + num; 
        NumerosInseridos = NumerosInseridos + 1
    }

    mediaPar = (numPares) / (somarPar);
    mediaImpar = (numImpares / somarImpar);
    mediaTodosNumeros = (numerosSomados / NumerosInseridos )

    console.log("A soma de todos os numeros é: "+ numerosSomados);

    console.log("A soma dos numeros pares digitados é : "+ numPares);

    console.log("A soma dos numeros Impares digitados é : "+ numImpares);

    console.log("A media da soma de numeros Pares é: " + mediaPar)

    console.log("A media da soma de numeros Impares é: "+ mediaImpar);
    console.log("A media da soma de todos os numeros  é: "+ mediaTodosNumeros);
    
}











//faça um programa que leia uma quantidade de numeros, se a quantidade de numeros inseridos for maior que 2, some a quantidade de numeros pares e impares inseridos, calcule a media de todos os numeros digitados, a media de pares e impares digitados, e no final exiba tudo;        
