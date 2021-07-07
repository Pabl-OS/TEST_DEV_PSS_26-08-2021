const { Router, response } = require('express');
const Productos  = require('../models/productos');


// registrar usuario
const ObtenerProductos = async(req,res) =>{
    const { sucursal,categoria } = req.body;
    const productos = await Productos.getProducts(sucursal,categoria);
    if (!sucursal){
        return res.status(400).json({
            ok: false,
           msg: 'No se han encotrado productos'
        });  
    }

    return res.status(200).json({
        ok: true,
        msg: 'Busqueda exitosa',
        productos: productos
    });  
   
    
};
const ObtenerPaquetes= async(req,res) =>{
    const { sucursal } = req.body;
    const paquetes = await Productos.getPackage(sucursal);
    if (!paquetes){
        return res.status(400).json({
            ok: false,
           msg: 'No se han encotrado productos'
        });  
    }

    return res.status(200).json({
        ok: true,
        msg: 'Busqueda exitosa',
        paquetes: paquetes
    });  
   
    
};




module.exports = {
    ObtenerProductos,
    ObtenerPaquetes
};
