var AdminUserService = require('../services/admuser.service');

// Saving the context of this module inside the _the variable
_this = this;

exports.createadmUser = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var User = {
        name: req.body.name,
        empid: req.body.empid,
        password: req.body.password
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdUser = await AdminUserService.createadmUser(User)
        return res.status(201).json({createdUser, message: "Succesfully Created User"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
    }
}

exports.loginadmUser = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("body",req.body)
    var Admin = {
        empid: req.body.empid,
        password: req.body.password
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var loginadmUser = await AdminUserService.loginadmUser(Admin);
        return res.status(201).json({loginadmUser, message: "Succesfully login"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Invalid username or password"})
    }
}

