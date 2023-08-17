const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

app.post('/calc', (req,res) => {
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    let resultado = 0;


    if(req.body.op == "soma"){
        resultado = n1 + n2 
        res.json("O resultado da Operação é: " + resultado)
    }
    else if(req.body.op == "subtracao") {
       resultado = n1 - n2;
       res.json("O resultado da Operação é: " + resultado)
    }
    else if(req.body.op == "multiplicar"){
        resultado = n1 * n2;
        res.json("O resultado da Operação é: " + resultado);
    }
    else if( req.body.op == "divisao"){
        resultado = n1 / n2;
        res.json("O resultado da Operação é: " + resultado)
    }
    else {
        res.send("erro")
    }

})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})