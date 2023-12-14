const express = require("express");
const productController = require("../controller/product-controller")
const router = require("express").Router();


router.get("/listar", productController.listar);
router.post("/cadastrar", productController.cadastrar);
router.put("/alterar", productController.alterar)
router.delete("/deletar", productController.deletar)

module.exports = router