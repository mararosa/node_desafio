const professoras = require("../model/professoras.json")

exports.get = (req, res) => {  // estou deixando acessivel para outras pessoas. 
    const profSemCpf = professoras.map(item => {
        item.cpf  = "***********"
        return item

    })
    res.status(200).send(profSemCpf)

} 

exports.getById = (req, res) => { // vou puxar, trazer uma repsostas atraves do id de uma professora, que seja unica
    const id = req.params.id
    const prof = professoras.find(prof => prof.id == id)
    delete prof.cpf
    res.status(200).send(prof)
}