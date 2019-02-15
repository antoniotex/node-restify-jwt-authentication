const bcrypt = require('bcryptjs')
const mongoose = require('mongoosejs')
const Usuario = mongoose.model('usuario')

exports.authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
        try{
            // Obter usuario pelo email
            const usuario = await Usuario.findOne({ email })

            // Teste de senha
            bcrypt.compare(password, user.password, (erro, passou) => {
               if(erro) throw erro
                if(passou){
                    // Senha passou
                    resolve(user)
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