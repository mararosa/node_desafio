const express = require("express")
const router = express.Router() // chamo soh o cara que vai fazer o roteamento. A gente sempre instacia o express como função. Mas nesse caso eu nao instacio o express todo, mas sim o router.

router.get("/", function(req, res) {
    res.status(200).send({ // abro outra chave pq estou mandando um objeto
        title: "Reprograma Turma da Kelly",
        version: "0.0.1"
    })
})

module.exports = router // esse module precisa estar disponivel

