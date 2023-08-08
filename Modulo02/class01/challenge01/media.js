/* Exercicio01
Faça um arquivo media.js contendo uma function que recebe 3 numeros como parametros, calcule a media e retorne o resultado.
invoque a função 3 vezes passando argumentos diferentes e exiba os resultados
*/

function media( n1, n2, n3){
    let m = (n1 + n2 + n3) / 3

    return m;
}

let media1 = media(10, 20, 30);
//console.log(media1); // 40; 

let media2 = media(50, 50, 50);
//console.log(media2); // 50;

let media3 = media(10, 10, 10);
console.log(media3);
