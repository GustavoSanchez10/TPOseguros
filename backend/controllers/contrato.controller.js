const Contrato = require('../models/Contrato.model');
var ContratoService = require('../services/contrato.service');

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getContratos = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Contratos = await ContratoService.getContratos({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Contratos, message: "Succesfully Contratos Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createContrato = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var Contrato = {
       
        order: req.body.order ? req.body.order : null,
        stype: req.body.stype ? req.body.stype : null,
        name: req.body.name ? req.body.name : null,
        email: req.body.email ? req.body.email : null,
        address: req.body.address ? req.body.address : null

    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdContrato = await ContratoService.createContrato(Contrato)
        return res.status(201).json({createdContrato, message: "Succesfully Created Contrato"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Contrato Creation was Unsuccesfull"})
    }
}

exports.updateContrato = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.order) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    
    var Contrato = {
       
        order: req.body.order ? req.body.order : null,
        stype: req.body.stype ? req.body.stype : null,
        name: req.body.name ? req.body.name : null,
        email: req.body.email ? req.body.email : null,
        address: req.body.address ? req.body.address : null
    }
    try {
        var updatedContrato = await ContratoService.updateContrato(Contrato)
        return res.status(200).json({status: 200, data: updatedContrato, message: "Succesfully Updated Contrato"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeContrato = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await ContratoService.deleteContrato(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}


    
    
