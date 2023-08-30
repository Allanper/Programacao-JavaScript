const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const produto = require('./Routers/produto');


app.use('/produto', produto.router);












app.listen(port, () => {
    console.log(`Servidor Rodando na Porta ${port}`)
})

