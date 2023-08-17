// Carrega e inicializa. 
const express = require("express"); //exporta uma Function


const app = express(); // inicializar.
app.use(express.json()) // ativando leitura em Json

const port = 3000;  //configurar porta 


let people = [{
    nome: "Thiago",
    idade: 27
},
{
    nome: "JAO",
    idade: 28
},
{
    nome: "Maria",
    idade: 20
}];



app.get('/clients', (req, res) => { // essa rota consulta itens do Arrey
    res.json(people)
});

app.post('/clients', (req, res) => {//essa rota adiciona um novo cliente no arrey
    people.push(req.body);
    res.send("new client !!! ")
});

app.delete('/clients', (req, res) => {// essa rota exclui um cliente do arrey
    let indice = -1;
    
    for(let i=0; i < people.length; i++){
       if(req.body.nome == people[i].nome){
        indice = i;

        break;
       }
    }
    people.splice(indice, 1); 

    res.send("Client Deleted!!!")
});

app.put('/clients', (req, res) => {//essa rota altera dados dos clientes ja cadastrado
  
    res.send("Alteração Feita com sucesso!!!")
});




//INICIALIZAR O SERVIDOR.
app.listen(port, () => {
    console.log(`exemple app  listening on port ${port}`)
})

//people.shift()//exclui primeira posição do arrey
//people.pop()// exclui ultima posição do arrey 
