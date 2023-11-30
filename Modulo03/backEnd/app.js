const express = require('express');
const mongoose = require("mongoose");
const userRoute= require('./route/user-router.js');
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();


const app = express();
app.use(cors());

const port = 3001;
app.use(express.json());
app.use("/user",userRoute);



// ------------------------------------------------------ /------------


//conecta com o banco 


const connectionString = process.env.CONNECTION_STRING;
mongoose.connect(connectionString);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
