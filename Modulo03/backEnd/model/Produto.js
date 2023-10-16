const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", { produtoDescricao: String, password: String, produtoPreco: String });


module.exports=  Produto