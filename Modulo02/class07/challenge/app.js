const express = require('express')
const controller = require('./controller.js')
const app = express();
const port = 3000;

app.use(express.json())

app.post('/calc',controller.verificarParImpar)

app.listen(port, () => {

    console.log("Servidor Rodando")

})