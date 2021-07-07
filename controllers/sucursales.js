const { Router, response } = require('express');
const Sucursales  = require('../models/sucursal');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


// registrar usuario
const ObtenerSucursales = async(req,res) =>{

    const sucursal = await Sucursales.getSucursal();
    if (!sucursal){
        return res.status(400).json({
            ok: false,
           msg: 'No se han encotrado sucursales'
        });  
    }

    return res.status(200).json({
        ok: true,
        msg: 'Busqueda exitosa',
        sucursales: sucursal
    });  
   
    
};
const ObtInfoSucursales = async(req,res) =>{
    const { id } = req.params;
   console.log(id);
    const categorias = await Sucursales.categoriasSucursal(id);
    const banners = await Sucursales.bannersSucursal(id);
 

    return res.status(200).json({
        ok: true,
        msg: 'Busqueda exitosa',
        categorias: categorias,
        banners: banners,
    });  
   
    
};




module.exports = {
    ObtenerSucursales,
    ObtInfoSucursales
};
