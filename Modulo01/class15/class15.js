

// ------------------------- resolução exercicio challenge - class14 -------------------------------------
// ---------------------------------FORMA FEITA PARA CONSOLE.LOG()------------------------------------------------

/*
//n de comprar
let qtdP = 0   //35
let qtdM = 0   //35
let qtdG = 0   //35


let precoP = 5 
let precoM = 5.5
let precoG = 6

let qtdCompras = 0
let media = 0 

do {


   let p = prompt("Número de P:") // 5
   let m = prompt("Número de M:") // 5
   let g = prompt ("Número de G:") // 5

    qtdP = parseInt(qtdP) + parseInt(p)
    qtdM = parseInt(qtdM) + parseInt(m)
    qtdG = parseInt(qtdG) + parseInt(g)

    qtdCompras =  qtdCompras +1

    var sair = prompt("Continuar?sim, nao")

}while(sair=="sim")


let totalP = qtdP * precoP
let totalM = qtdM * precoM
let totalG = qtdG * precoG

let mediaTotal = (totalP + totalM + totalG) / qtdCompras


//exibir 
console.log(`Compras:${qtdCompras}`)
console.log(`Preço P: ${precoP}, Preço M:${precoM}, Preço G:${precoG}`)
console.log(`QTD P: ${qtdP} , QTD M: ${qtdM} , QTD G: ${qtdG}`)
console.log(`TOTAL P: ${totalP} , TOTAL M: ${totalM} , TOTAL G: ${totalG}`)
console.log(`MEDIA TOTAL: ${mediaTotal} EUR`)

*/




//-----------------------------------------FORMA PARA INTERAÇÃO NA TELA USUARIO ----------------------------------



//n de comprar

let qtdP = 0; //35
let qtdM = 0; //35
let qtdG = 0; //35

let precoP = 5;
let precoM = 5.5;
let precoG = 6;

let qtdCompras = 0;
let media = 0;

function comprar() {
  let p = document.getElementById("p").value;
  let m = document.getElementById("m").value;
  let g = document.getElementById("g").value;

  qtdP = parseInt(qtdP) + parseInt(p);
  qtdM = parseInt(qtdM) + parseInt(m);
  qtdG = parseInt(qtdG) + parseInt(g);

  qtdCompras = qtdCompras + 1;
  calcular()
}

function calcular() {
  let totalP = qtdP * precoP;
  let totalM = qtdM * precoM;
  let totalG = qtdG * precoG;

  let mediaTotal = (totalP + totalM + totalG) / qtdCompras;

  //exibir
  let resultado = `Compras:${qtdCompras}
                    Preço P: ${precoP}, Preço M:${precoM}, Preço G:${precoG}
                    QTD P: ${qtdP} , QTD M: ${qtdM} , QTD G: ${qtdG}
                    TOTAL P: ${totalP} , TOTAL M: ${totalM} , TOTAL G: ${totalG}
                    MEDIA TOTAL: ${mediaTotal} EUR`;

  document.getElementById("saida").innerText = resultado;
}