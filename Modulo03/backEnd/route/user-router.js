const express = require("express");
const usuarioController = require("../controller/user-controller");
const router = require("express").Router();
const verificaToken = require("../middleware/verificaToken.js");
//express
router.post("/autenticar", usuarioController.autenticar),
  router.post("/cadastrar", verificaToken, usuarioController.cadastrar),
  router.get("/listar", verificaToken, usuarioController.listar),
  router.put("/alterar", verificaToken, usuarioController.alterar),
  router.delete("/deletar", verificaToken, usuarioController.deletar);

module.exports = router;
