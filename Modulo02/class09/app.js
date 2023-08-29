const express = require('express');
const controllers = require('./controllers/controller')
const app = express();
const port = 3000;
app.use(express.json())


app.post('/autorizacao', controllers.auth)
app.post('/cadastrar', controllers.cadastro)
app.get('/listar', controllers.lista)
app.put('/altera', controllers.altera)
app.delete('/deletar', controllers.del)


app.listen(port, () => {
    console.log("Servidor rodando")
})