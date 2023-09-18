const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", { produtoDescricao: String,  produtoPreco: String, produtoImagem: String });
module.exports=  Produto