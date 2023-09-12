const express = require('express');

//const mongodb = require('mongodb');
const app = express();
app.use(express.json());
port = 3000;


const usuario = require('./Router/cliente');



app.use('/usuario', usuario.router);


app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})