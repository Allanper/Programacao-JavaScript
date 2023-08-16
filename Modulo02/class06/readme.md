1) Crie um programa em nodeJS com express que possua uma rota http POST chamada /calc, que 
receberá dois números: n1 e n2 e uma operação ('som', 'mul', 'div', 'sub')  vindos do body em 
formato JSON como:


{
	
	"n1": 15,
	"n2": 30,
	"op":"sub"
}, 

//40, 45, 65, 50,60,50

Ex: 
app.post("/calc" , (req,res)=>{

  //Ler os dados n1, n2 e op
  //Fazer o calculo
  //Enviar resposta

}) 

app.get("/calculos", (req, res)=>{
  // enviar para o cliente o histórico das resposta

})


app.get("/media", (req, res)=>{
  

})

//get /media JSON (media dos inserios)

//GET /pares  JSON (array de pares)

//GET /impares impares JSON (array de impares)

//GET /maior  resultado  JSON {maior:50}

//GET /menor resultado  JSON {menor:10}

//buscarPosicao
Dado um numero mostrar o indice do primeiro valor encontrado   {n:10}  resultado: posicao 3 ou nao econtrado






e processe e envie uma resposta  http contendo o resultado como: 40