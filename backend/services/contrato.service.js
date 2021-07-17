// Gettign the Newly created Mongoose Model we just created 
var Contrato = require('../models/Contrato.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getContratos = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Contratos = await Contrato.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Contratos;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Contratos');
    }
}

exports.createContrato = async function (contrato) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newContrato = new Contrato({
        stype: contrato.stype,
        name: contrato.name,
        address: contrato.address,
        order: contrato.order,
        date: new Date()
    })

    try {
        // Saving the Contrato
        var savedContrato = await newContrato.save();
        var token = jwt.sign({
            id: savedContrato._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating User")
    }
}


exports.deleteContrato = async function (id) {

    // Delete the User
    try {
        var deleted = await Contrato.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("User Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the User")
    }
}

