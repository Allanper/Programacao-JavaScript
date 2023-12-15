const mongoose = require("mongoose");

const Product = mongoose.model("Product",
{ 
 nome: String,
 pescricao: String,
 preco: String,
 imagem: String,
 categoria: String,
 });


module.exports=  Product