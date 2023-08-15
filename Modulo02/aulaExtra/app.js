const cliente =  require('./cliente.js')

cliente.pessoa.nome = "Thiago";
cliente.pessoa.idade = 27;
cliente.pessoa.nif = 999999999;


//cliente.pessoa.imprimirDados(function(texto) { return texto.toUpperCase()});
cliente.pessoa.imprimirDados((texto) => texto.toUpperCase());
console.log("======================================================")

//clientes.pessoa.imprimirDados(function(texto) { return texto.toLowerCase()});
cliente.pessoa.imprimirDados((texto) => texto.toLowerCase());
console.log("\n======================================================")

//clientes.pessoa.imprimirDados(function(texto) { return texto.split("").reverse().join("");})
cliente.pessoa.imprimirDados((texto) => texto.split("").reverse().join(""));
console.log("\n=====================================================")

//----------------------------------------------------------------

let soma = cliente.calc.somar(10, 20);
let subtrair = cliente.calc.subtrair(20,10);
let media = cliente.media.calcMedia( 10, 10, 10);

console.log(soma);
console.log(subtrair);
console.log(media);