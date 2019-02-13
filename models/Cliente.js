const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const Schema = mongoose.Schema

const ClienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    balanco: {
        type: Number,
        default: 0
    }
})

ClienteSchema.plugin(timestamp)

const Cliente = mongoose.model('Cliente', ClienteSchema)
module.exports = Cliente
