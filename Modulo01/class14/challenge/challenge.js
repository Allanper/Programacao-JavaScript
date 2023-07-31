/*
Exercício:

//classificacção das t-shirt
#Preços
precoP = 5
precoM = 5.5
precoG = 6
Faça um programa que leia o numero de t-shirts P, M e G de um número N de compras, enquanto o usuário desejar continuar registrando as compras.
O programa deve calcular o valor total de camisetas P, M e G comprados, a quantidade de cada uma e a média total todos.
//QTD de P: 10
//QTD de M: 5
//QTD de G: 15
exemplo de compras
 P  M  G
 10,5,15    //sim
 1, 1, 1    //sim
 2, 2, 2    //sim
 1, 0, 0     //sim
             //nao
               Valor Total
 Qtd P: 14  =  70 euros
 Qtd M: 8   =  44 euros
 Qtd G: 18  =  108 euros
Media: 74 euros
*/


const precoP = 5;
const precoM = 5.5;
const precoG = 6;


function limparValores(){

  document.getElementById("sizeP").value = ("");
  document.getElementById("sizeM").value = ("");
  document.getElementById("sizeG").value = ("");
  

}

function CalcularCompra() {
  
  const sizeP_ = document.getElementById("sizeP");
  const sizeM_ = document.getElementById("sizeM");
  const sizeG_ = document.getElementById("sizeG");

  sizeP_.style.border = "none";
  sizeM_.style.border = "none";
  sizeG_.style.border = "none";


  let somaP = 0;
  let somaM = 0;
  let somaG = 0;

  let comprar = "sim";

    if(!sizeP_.value || !sizeM_.value || !sizeG_.value){
        if((!sizeP_.value) && (!sizeM_.value) && (!sizeG_.value)){
          sizeP_.style.border = "2px solid red";
          sizeM_.style.border = "2px solid red";
          sizeG_.style.border = "2px solid red";
        }
        else if((!sizeP_.value) && (!sizeM_.value)) {
          sizeP_.style.border = "2px solid red";
          sizeM_.style.border = "2px solid red";      
        }
        else if((!sizeP_.value) && (!sizeG_.value)) {
          sizeP_.style.border = "2px solid red";
          sizeG_.style.border = " 2px solid red"
        } 
        else {
          sizeM_.style.border = " 2px solid red";
          sizeG_.style.border = " 2px solid red";
        }
    }
    else { 
      while(comprar == "sim") {
      somaP = somaP + parseInt(sizeP_.value);
      somaM = somaM + parseInt(sizeM_.value);
      somaG = somaG + parseInt(sizeG_.value);
      
      comprar = prompt("Gostaria de Realizar uma nova Compra? sim | nao ");
    } 
      const calculoTotalP = somaP * precoP;
      const calculoTotalM = somaM * precoM;
      const calculoTotalG = somaG * precoG;

      let mediaValores = (calculoTotalP + calculoTotalM + calculoTotalG) / 3;
      console.log("camisas P = "+ somaP + " = " + (somaP * precoP) + "Euros" );
      console.log("camisas M = "+ somaM + " = " + (somaM * precoM) + "Euros" );
      console.log("camisa G = "+ somaG + " = " + (somaG * precoG) + "Euros");
      console.log("A Média é :" + mediaValores + " Euros")
      document.getElementById("saida").innerHTML = `You Bought:${somaP}P t-shorts | ${somaM}M t-shorts | ${somaG}G t-shorts | average: ${mediaValores}€ `;
  }
    

}