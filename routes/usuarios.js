const erros = require('restify-errors')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')

module.exports = server => {
    // Registra Usuario
    server.post('/registro', (req, res, next) => {
        const { email, senha } = req.body

        const usuario = new Usuario({
            email,
            senha
        })

        bcrypt.genSalt(10, (erro, salt) => {
            bcrypt.hash(usuario.senha, salt, async (erro, hash) => {
                usuario.senha = hash
                try{
                    const novoUsuario = await usuario.save()
                    res.send(201)
                    next()
                }catch(erro){
                    return next(new erros.InternalError(erro.message))
                }
            })
        })
    })
}