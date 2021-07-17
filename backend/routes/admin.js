/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var admins = require('./api/admins.route')

router.use('/admins', admins);

module.exports = router;