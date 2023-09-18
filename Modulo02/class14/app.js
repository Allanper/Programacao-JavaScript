const express = require('express');
const mongoose = require("mongoose");


const controllers = require('./user-controller')
const ProdutoController = require('./produto-controller')
const app = express();

const port = 3000;
app.use(express.json())

app.post('/usuario/Autorizacao', controllers.auth)
app.post('/usuario/Cadastrar', controllers.cadastro)
app.get('/usuario/Listar', controllers.lista)
app.put('/usuario/Altera', controllers.altera)
app.delete('/usuario/deletar', controllers.deletarUsuario)

// ------------------------------------------------------ /------------

//app.post('/produto/Autorizacao', controllers.auth)
app.post('/produto/cadastrar', ProdutoController.cadastro)
app.get('/produto/listar', ProdutoController.lista)
app.put('/produto/altera', ProdutoController.altera)
app.delete('/produto/deletar', ProdutoController.del)

//conecta com o banco 


const connectionString ="mongodb+srv://jao:QZLxjey44YjIBhFl@cluster0.p9pacqw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connectionString);


app.listen(port, () => {
    console.log("Servidor rodando");
});
