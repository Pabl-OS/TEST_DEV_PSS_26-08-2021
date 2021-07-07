const { Router } = require('express');

const { ObtenerGenerales,  } = require('../controllers/generales');


const router = Router();

router.get('/',ObtenerGenerales);





module.exports = router;