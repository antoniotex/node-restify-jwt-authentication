const restify = require('restify')
const mongoose = require('mongoose')
const config = require('./config')

const server = restify.createServer()

// Middleware
server.use(restify.plugins.bodyParser())

server.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
})

const db = mongoose.connection

db.on('erro', (erro) => console.log(erro))

db.once('open', () => {
    require('./routes/clientes')(server)
    console.log(`Servidor rodando na porta ${config.PORT}`)
})