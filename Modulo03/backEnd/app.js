const express = require('express');
const mongoose = require("mongoose");
const userRoute= require('./route/user-router.js');
const cors = require('cors');


const app = express();
app.use(cors());

const port = 3001;
app.use(express.json());
app.use("/user",userRoute);



// ------------------------------------------------------ /------------


//conecta com o banco 


const connectionString ="mongodb+srv://adminLojaOnline:Piylu7veug8z1ifk@cluster0.70t8cxj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connectionString);


app.listen(port, () => {
    console.log("Servidor rodando");
});
