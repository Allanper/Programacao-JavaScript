const express = require('express');
const controllers = require('./controllers')
const app = express();
const port = 3000;
app.use(express.json())



app.post('/calc', controllers.somar )

app.get('/calculos',controllers.calculos )

app.get('/limpar', controllers.limpar)

app.get('/media', controllers.calcMedia)

app.get('/numerosPares', controllers.calcPares)

app.get('/numerosImpares', controllers.calcImpares)

app.get('/maiorNumero', controllers.calcMaior )



app.listen(port, () => {
    console.log("Servidor rodando")
})
