const express = require("express");
const usuarioController = require("../controller/user-controller");
const router = require("express").Router();
const verificaToken = require("../middleware/verificaToken.js");
//express
router.post("/autenticar", usuarioController.autenticar),
  router.post("/cadastrar",  usuarioController.cadastrar),
  router.get("/listar",  usuarioController.listar),
  router.put("/alterar", usuarioController.alterar),
  router.delete("/deletar", usuarioController.deletar);

module.exports = router;
