const verificarParImparService = require('./service.js');

function verificarParImpar(req,res) {
    
    const numero = req.body.numero
    const resultado = verificarParImparService(numero)
    res.json(resultado)
}

module.exports = {
    verificarParImpar
}