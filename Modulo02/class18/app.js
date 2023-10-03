const express = require('express');
const mongoose = require("mongoose");
const userRoute= require('./route/user-router.js')


const app = express();

const port = 3000;
app.use(express.json())
app.use("/user",userRoute)



// ------------------------------------------------------ /------------


//conecta com o banco 


const connectionString ="mongodb+srv://jao:QZLxjey44YjIBhFl@cluster0.p9pacqw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connectionString);


app.listen(port, () => {
    console.log("Servidor rodando");
});
