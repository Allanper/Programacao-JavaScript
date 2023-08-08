function somar(n1, n2, cb) {
    let s = n1 + n2;
    return cb(s);
}

function multiplicar(r) {
    return r * 2;
}

function calcularImpostos(r) {
    return r * 0.1;
}

function calcularJuros(r) {
    return r * 0.5;
}

let somaEmultiplica = somar(10, 20, multiplicar);

// console.log(somaEmultiplica); // 60.

let calcDosImpostos = somar(50,20, calcularImpostos);

// console.log(calcDosImpostos); // 7;

let calcDosJuros = somar(50, 20, calcularJuros);

// console.log(calcDosJuros); //35 ;  