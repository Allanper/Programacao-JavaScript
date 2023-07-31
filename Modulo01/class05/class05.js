function imc(){
  //lendo o value do campo input peso
  let _peso = pesoField.value; 

  //lendo o value do campo input altura
  let _altura =alturaField.value; 

  let alturaQuadrado = _altura * _altura;

  let imc =  _peso / alturaQuadrado;

  alert(imc)

}
