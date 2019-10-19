const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")// to passando um caminho. Estou delegando para o controller responder minhas requisiçoes. Vai gerenciar os meus controllers

router.get("/", controller.get)
router.get("/:id", controller.getById)

module.exports = router