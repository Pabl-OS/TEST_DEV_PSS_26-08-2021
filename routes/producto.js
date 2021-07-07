const { Router } = require('express');
const { check } = require('express-validator');
const { ObtenerProductos, ObtenerPaquetes } = require('../controllers/products');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.post('/',[
    check('sucursal','la sucursal es obligatorio').not().isEmpty(),
    check('categoria','la categoria es obligatorio').not().isEmpty(),
    validarCampos
    ],ObtenerProductos);

router.post('/paquetes',[
    check('sucursal','la sucursal es obligatorio').not().isEmpty(),
    validarCampos
    ],ObtenerPaquetes);


    module.exports =router;