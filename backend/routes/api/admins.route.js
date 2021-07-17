var express = require('express')
var router = express.Router()
var AdmUserController = require('../../controllers/admin.controller');



// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user.routes');
  });
router.post('/registration', AdmUserController.createadmUser)
router.post('/login/', AdmUserController.loginadmUser)




// Export the Router
module.exports = router;



//admin/admins/registration
//admin/admins/login
