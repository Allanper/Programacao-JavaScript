const express = require('express');
const controllers = require('./controllers')
const app = express();
const port = 3000;
app.use(express.json())



app.post('/calc', controllers.somar )




app.listen(port, () => {
    console.log("Servidor rodando")
})
