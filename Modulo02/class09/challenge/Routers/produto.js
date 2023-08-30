const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller')


router.post('/cadastrar', controller.cad);
router.get('/listar', controller.listAll);











module.exports = { router };
