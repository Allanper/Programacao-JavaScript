function somar(numeros){
   let s = 0;
   for(let i = 0; i < numeros.length; i++){
    s = s + numeros[i];
   }
   return s;
}
let result = somar([1,2,4,5,6,7,4,5,5,6,7,7,8,41,455,856,8])

console.log(result)