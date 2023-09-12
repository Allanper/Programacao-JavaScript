const express = require('express');
const router = express.Router()

const controller = require('../Controllers/controller')


router.post('/cadastrar', controller.cadastra);
router.get('/listar', controller.lista)
router.put('/editar', controller.altera)
router.delete('/deletar', controller.exclui)




module.exports = {
    router
}

