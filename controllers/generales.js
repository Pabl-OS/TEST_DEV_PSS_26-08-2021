const { Router, response } = require('express');
const Generales  = require('../models/generales');



// get data general
const ObtenerGenerales  = async(req,res) =>{

    const generales = await Generales.getGenerals();
    const banners = await Generales.getBannersGenerals();
    if (!generales ){
        return res.status(400).json({
            ok: false,
           msg: 'No se han encotrado datos generales'
        });  
    }else if (!banners ){
        return res.status(400).json({
            ok: false,
           msg: 'No se han encotrado datos generales'
        });  
    }
    return res.status(200).json({
        ok: true,
        msg: 'Busqueda exitosa',
        generales: generales,
        banners:banners
    });  
};


   
    



module.exports = {
    ObtenerGenerales
};
