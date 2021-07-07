const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken, ObtenerSucursales, ObtInfoSucursales } = require('../controllers/sucursales');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// crear sucursales
router.get('/',ObtenerSucursales);
router.get('/sucursal/:id',ObtInfoSucursales);
// router.get('/sucursal',ObtInfoSucursales);



module.exports = router;