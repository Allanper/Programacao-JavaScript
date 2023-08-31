const express = require('express');
const router = express.Router()

const controller = require('../Controllers/controller')


router.post('/cadastrar', controller.cadastra);








module.exports = {
    router
}

