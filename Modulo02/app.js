//1) Carrega e inicializa
const express = require('express')  //exporta uma function function express(){  }
const app = express()  // inicializa
app.use(express.json()) //ativando leitura em JSON
const port = 3000 // configura a porta

let clientes = [  {nome:'Virmerson'}, {nome:'Zé'}, {nome: 'Maria'} ]

//2) configura as rotas
app.get('/clientes', (req, res) => {
  res.json (clientes)
})

app.post('/clientes', (req, res)=> {
    clientes.push (req.body)
    res.send('cadastrado com sucesso!')
}) 

app.delete('/', (req,res)=>{
    res.send('Chamou por DELETE')
}) 

app.put('/', (req, res)=>{
    res.send('Chamou por PUT')
})

//3) Inicia o server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})