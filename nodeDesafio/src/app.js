const express = require("express")
const app = express()

// rotas
const index = require("./routes/index") 
const professoras = require("./routes/professorasRoute")

app.use(function(req, res, next) {
    res.header("Access-Controle-Allow-Origin", "*")
    res.header(
        "Access-Controle_allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/professoras", professoras) //quando bater na rota /proforrsas, chama professoras(route)

module.exports = app