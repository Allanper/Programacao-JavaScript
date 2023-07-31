/* console.log(" class 16 ");

let notas = [ 7.5, 2.3, 5.6, 7.8, 9.0, 10 ];

console.log(" Quantidade de Notas: " + notas.length);
console.log("nota 1: " + notas[0]);
console.log("nota 2: " + notas[1]);
console.log("nota 3: " + notas[2]);
console.log("nota 4: " + notas[3]);
console.log("nota 5: " + notas[4]);
console.log("nota 6: " + notas[5]);
*/

//-------------------------------------------------------------------------------------
/*
let notas = [ 7.5, 2.3, 5.6, 7.8, 9.0, 10 ];

console.log("QTD:"+ notas.length)
let i = 0
console.log("Nota 1: " +notas[i])  //i=0  notas[0]
i++ // i=i+1  //i=0+1 //1
console.log("Nota 2: "+ notas[i])   //i=1  notas[1]
i++  //i=2
console.log("Nota 3: "+ notas[i])   //i=2 notas[2]
i++ //i=3
console.log("Nota 4: "+ notas[i])   //i=3 notas[3]
i++ //i=4
console.log("Nota 5: "+ notas[i])  //i=4 notas[4]
i++ //i=5
console.log("Nota 6: "+ notas[i])  //i=5 notas[5]

*/

//--------------------------------------------------------------------------------------

let notas = [7.5, 2.3, 5.6, 7.8, 9.0, 10, 7.8, 9.7, 6.5];

console.log("QTD:"+ notas.length);

for (let i = 0; i< notas.length;i++ ) {
    console.log(`Nota ${i+1} :  ${notas[i]}`) 
}