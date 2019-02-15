const restify = require('restify')
const mongoose = require('mongoose')
const config = require('./config')
const rjwt = require('restify-jwt-community')
const path = require('path')

const server = restify.createServer()

// Middleware
server.use(restify.plugins.bodyParser())

// Protege rotas
// Também posso proteger rotas individuais adicionando rjwt({secret: config.JWT_SECRET})
// entre o nome da rota e a chamada de função nas respectivas rotas que quero proteger
// server.use(rjwt({ secret: config.JWT_SECRET }).unless({ path: ['/auth'] }))

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

server.listen(config.PORT, () => {
    // Remove warning bugado
    mongoose.set('useFindAndModify', false)

    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }, () => {
        console.log('MongoDB conectado!')
    })
})

const db = mongoose.connection

db.on('erro', (erro) => console.log(erro))

db.once('open', () => {
    require('./routes/clientes')(server)
    require('./routes/usuarios')(server)
    console.log(`Servidor rodando na porta ${config.PORT}`)
})