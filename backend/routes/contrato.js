/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var contratos = require('./api/contratos.route')

router.use('/contratos', contratos);

module.exports = router;