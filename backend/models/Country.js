const mongoose = require('mongoose')

const paisSchema = new mongoose.Schema({
    code: String,
    name: String,
    capital: String,
    currency: String,
    languages: String,
    continent: String
})

const pais = mongoose.model('paises', paisSchema)
module.exports = pais