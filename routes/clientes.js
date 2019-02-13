const erros = require('restify-errors')

module.exports = server => {
    server.get('/clientes', (req, res, next) => {
        res.send({ msg: 'test' })
        next()
    })
}