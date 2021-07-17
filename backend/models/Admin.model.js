var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var AdminSchema = new mongoose.Schema({
    name: String,
    empid: String,
    password: String,
    date: Date
})

AdminSchema.plugin(mongoosePaginate)
const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin;