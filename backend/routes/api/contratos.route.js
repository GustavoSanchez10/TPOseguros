var express = require('express')
var router = express.Router()
var ContratoController = require('../../controllers/contrato.controller');



// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user.routes');
  });
router.post('/create', ContratoController.createContrato)
router.get('/', ContratoController.getContratos)
router.delete('/remove', ContratoController.removeContrato)
router.put('/update', ContratoController.updateContrato)





// Export the Router
module.exports = router;



//contrato/contratos/create
//contrato/contratos/remove
//contrato/contratos/update
//contrato/contratos/       *se muestran contratos*

