const { Router } = require('express');
const { check } = require('express-validator');
const { getAllPeoples,InsertPeople,UpdatePeople,DeletePeople,getPeople } = require('../controllers/peoples');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.get('/',validarJWT,getAllPeoples);
router.get('/:id',validarJWT,getPeople);
router.post('/',[
    check('Nombre','la Nombre es obligatorio').not().isEmpty(),
    check('ApellidoPaterno','la ApellidoPaterno es obligatorio').not().isEmpty(),
    check('ApellidoPaterno','la ApellidoPaterno es obligatorio').not().isEmpty(),
    check('ApellidoMaterno','la ApellidoMaterno es obligatorio').not().isEmpty(),
    check('RFC','la RFC es obligatorio').not().isEmpty(),
    check('FechaNacimiento','la FechaNacimiento es obligatorio').not().isEmpty(),
    validarCampos,validarJWT
],InsertPeople);


router.put('/',[
    check('IdPersonaFisica','la Nombre es obligatorio').not().isEmpty(),
    check('Nombre','la Nombre es obligatorio').not().isEmpty(),
    check('ApellidoPaterno','la ApellidoPaterno es obligatorio').not().isEmpty(),
    check('ApellidoPaterno','la ApellidoPaterno es obligatorio').not().isEmpty(),
    check('ApellidoMaterno','la ApellidoMaterno es obligatorio').not().isEmpty(),
    check('RFC','la RFC es obligatorio').not().isEmpty(),
    check('FechaNacimiento','la FechaNacimiento es obligatorio').not().isEmpty(),
    check('UsuarioAgrega','la UsuarioAgrega es obligatorio').not().isEmpty(),
    check('Activo','la Activo es obligatorio').not().isEmpty(),
    validarCampos,validarJWT
],UpdatePeople);

router.delete('/:id',validarJWT,DeletePeople);



    module.exports =router;