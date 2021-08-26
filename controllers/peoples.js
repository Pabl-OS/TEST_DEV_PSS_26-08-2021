const { Router, response } = require('express');
const Persons  = require('../models/peoples');


// get all persons 
const getAllPeoples = async(req,res) =>{
    
    const personas = await Persons.getAllPeople();
    if (!personas){
        return res.status(400).json({
            ok: false,
           msg: 'No se han encotrado personas fisicas'
        });  
    }
    return res.status(200).json({
        ok: true,
        msg: 'Busqueda exitosa',
        personas: personas
    });  

};
// get all persons 
const getPeople = async(req,res) =>{
   const {id} = req.params;

    const persona = await Persons.getPeople(id);
    if (!persona){
        return res.status(400).json({
            ok: false,
           msg: 'No se la encotrado persona fisicas'
        });  
    }
    return res.status(200).json({
        ok: true,
        msg: 'Busqueda exitosa',
        persona: persona
    });  

};

// this for insert new people to database
const InsertPeople= async(req,res) =>{
    const{ RFC }= req.body;
    const rfc = await Persons.findRFC(RFC);
    if (rfc){
        return res.status(400).json({
            ok: false,
           msg: 'Ya existe un registro con el mismo rfc'
        });  
    }


    data=req.body;
    const people = await Persons.registerPeople(data);
    if (!people){
        return res.status(400).json({
            ok: false,
           msg: 'No se ha podido Agregar a la persona',
        });  
    }
    return res.status(200).json({
        ok: true,
        msg: 'Registro Exitoso'
    });  

};
// this for update people to database
const UpdatePeople= async(req,res) =>{
    const{ RFC }= req.body;
    const rfc = await Persons.findRFC(RFC);
    if (rfc){
        return res.status(400).json({
            ok: false,
           msg: 'Ya existe un registro con el mismo rfc'
        });  
    }

    const people = await Persons.updatePeople(req.body);
    if (!people){
        return res.status(400).json({
            ok: false,
           msg: 'No se ha podido Actualizar a la persona',
        });  
    }
    return res.status(200).json({
        ok: true,
        msg: 'Actualizacion Exitosa'
    });  

};
// this for delete people to database
const DeletePeople= async(req,res) =>{
    const people = await Persons.deletePeople(req.body);
    if (!people){
        return res.status(400).json({
            ok: false,
           msg: 'No se ha podido Procesar la peticion',
        });  
    }
    return res.status(200).json({
        ok: true,
        msg: 'La persona se ha Eliminado'
    });  

};




module.exports = {
    getAllPeoples,
    InsertPeople,
    UpdatePeople,
    DeletePeople,
    getPeople
};
