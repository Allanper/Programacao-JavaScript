let amountEquilatero = 0;
let amountIsosceles = 0;
let amountEscaleno = 0;


//function to counter and increment which triangle is: 
function updateTriangle() {
    document.getElementById("labelEquilatero").innerText = amountEquilatero;
    document.getElementById("labelEscaleno").innerText = amountEscaleno;
    document.getElementById("labelIsosceles").innerText = amountIsosceles;
}

//function to clean date in html field.
function cleanDate() {
    document.getElementById("firstSide").value= ("");
    document.getElementById("secondSide").value= ("");
    document.getElementById("thirdSide").value= ("");
}

//function to discover what kind of triangle is:
function triangle() {

    //geting date inserted by users in Interface Field
    const side1 = document.getElementById("firstSide");
    const side2 = document.getElementById("secondSide");
    const side3 = document.getElementById("thirdSide");

    side1.style.border = "none";
    side2.style.border = "none";
    side3.style.border = "none";
   
   //conditional to know if the fields are empty or not.
   if(!side1.value || !side2.value || !side3.value){
      if((!side1.value) && (!side2.value) && (!side3.value)){
          side1.style.border = "2px solid red";
          side2.style.border = "2px solid red";
          side3.style.border = "2px solid red";
      }
      else if((!side1.value) && (!side2.value)){
          side1.style.border = "2px solid red";
          side2.style.border = " 2px solid red";
      }
      else if((!side1.value) && (!side3.value)) {
          side1.style.border = "2px solid red";
          side3.style.border = "2px solid red";
      }
      else {
        side2.style.border = "2px solid red";
        side3.style.border = "2px solid red";
      }
    }
    else {
        const result = document.getElementById("result");   

        //condicional to validate e discover what kind of triangle is
        if(side1.value==side2.value && side2.value==side3.value && side3.value==side1.value){
            result.innerHTML = "Equilatero";
            amountEquilatero = amountEquilatero + 1;

            updateTriangle();
        }
        else if(side1.value!=side2.value && side2.value!=side3.value && side3.value!=side1.value){
            result.innerHTML = "Escaleno";
            amountEscaleno = amountEscaleno + 1;
            
            updateTriangle();
        }
        else {
            result.innerHTML = "Isósceles";
            amountIsosceles = amountIsosceles + 1;

            updateTriangle();
        } 
    }
}
cleanDate();