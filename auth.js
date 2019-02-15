const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario')

exports.authenticate = (email, senha) => {
    return new Promise(async (resolve, reject) => {
        try{
            // Obter usuario pelo email
            const usuario = await Usuario.findOne({ email })

            // Teste de senha
            bcrypt.compare(senha, usuario.senha, (erro, senhaOK) => {
               if(erro) throw erro
                if(senhaOK){
                    // Senha passou
                    resolve(usuario)
                } else {
                    // Senha não passou
                    reject('Falha na Autenticação')
                }
            })

        }catch(erro){
            // Email não encontrado
            reject('Falha na autenticação')
        }
    })
}