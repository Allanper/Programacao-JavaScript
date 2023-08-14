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



app.get('/clients', (req, res) => {
    res.json(people)
});

app.post('/clients', (req, res) => {
    people.push(req.body);
    res.send("new client !!! ")
});

app.delete('/clients', (req, res) => {
    people.delete(req.body);
    res.send("Client Deleted!!!")
});

app.put('/clients', (req, res) => {
    res.send("called PUT")
});




//INICIALIZAR O SERVIDOR.
app.listen(port, () => {
    console.log(`exemple app  listening on port ${port}`)
})