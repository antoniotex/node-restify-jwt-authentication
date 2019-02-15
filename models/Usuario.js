const mongoose = require('mongoose')
// const timestamp = require('mongoose-timestamp')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    // nome: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    email: {
        type: String,
        required: true,
        trim: true
    },
    passwoard: {
        type: String,
        required: true
    }
})

// ClienteSchema.plugin(timestamp)

const Cliente = mongoose.model('Usuario', UsuarioSchema)
module.exports = Cliente