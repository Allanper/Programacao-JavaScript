const express = require('express');
const { MongoClient } = require("mongodb")
//const mongodb = require('mongodb');
const app = express();
app.use(express.json());
port = 3000;


const usuario = require('./Router/cliente');



app.use('/usuario', usuario.router);





async function conectDb(){
    const connectionString = "mongodb+srv://thiagosilvats804:2eL6Y1h0MrpYxj63@cluster0.zwrilzs.mongodb.net/?retryWrites=true&w=majority";
    
    try {
      const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

      console.log("Conectado com Sucesso!!");

      app.listen(port, () => {
        console.log(`Servidor Rodando na Porta ${port}`)
})
    }catch(err){
        console.error("Erro ao conectar:", err);
    }
}



conectDb()