const mongoose = require("mongoose");

const Product = mongoose.model("Product",
{ 
 nome: String,
 Descricao: String,
 Preco: String,
 imagem: String,
 categoria: String,
 });


module.exports=  Product