function add() {
    let v1 = parseFloat(field1.value);
    let v2= parseFloat(field2.value);

    let resultado = v1 + v2; 

    console.log(resultado);

    //console.log(`field 1: ${v1} field 2: ${v2}` )
}

function subtracao() {
    let v1 = parseFloat(field1.value);
    let v2= parseFloat(field2.value);

    let resultado = v1 - v2;

    console.log(resultado);
}

function divisao() {
    let v1 = parseFloat(field1.value);
    let v2= parseFloat(field2.value);

    let resultado = v1 / v2;

    console.log(resultado);
}

function multiplicacao() {
    let v1 = parseFloat(field1.value);
    let v2= parseFloat(field2.value);

    let resultado = v1 * v2;

    console.log(resultado);
}

function restoDivisao() {
    let v1 = parseFloat(field1.value);
    let v2= parseFloat(field2.value);

    let resultado = v1 % v2;

    console.log(resultado);
}