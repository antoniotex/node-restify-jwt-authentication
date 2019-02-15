const erros = require('restify-errors')
const Cliente = require('../models/Cliente')

module.exports = server => {
    // Lista Clientes
    server.get('/clientes', async (req, res, next) => {
        try {
            const clientes = await Cliente.find({})
            res.send(clientes)
            next()
        } catch(erro) {
          return next(new erros.InvalidContentError(erro))  
        }
    })

    // Lista Cliente Único
    server.get('/clientes/:id', async (req, res, next) => {
        try {
            const cliente = await Cliente.findById(req.params.id)
            res.json(cliente)
            next()
        } catch(erro) {
          return next(new erros.ResourceNotFoundError(
              `Não existe cliente com o id ${req.params.id}`
          ))  
        }
    })

    // Cadastra Cliente
    server.post('/clientes', async (req, res, next) => {
        if(!req.is('application/json')){
            return new(new erros.InvalidContentError("Era esperado 'application/json'"))
        }

        const { nome, email, balanco } = req.body

        const cliente = new Cliente({
            nome,
            email,
            balanco
        })

        try {
            const novoCliente = await cliente.save()
            res.send(201)
            next()
        }catch(erro){
            return next(new erros.InternalError(erro.message))
        }
    })
}