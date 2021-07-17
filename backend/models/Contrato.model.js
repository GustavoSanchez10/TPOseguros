var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ContratoSchema = new mongoose.Schema({
    order: String,
    stype: String,
    name: String,
    address: String,
    date: Date
})

ContratoSchema.plugin(mongoosePaginate)
const Contrato = mongoose.model('Contrato', ContratoSchema)

module.exports = Contrato;