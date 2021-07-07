const { Router, response } = require('express');
const Users  = require('../models/users');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


// registrar usuario
const crearUsuario = async(req,res) =>{

    const user = await Users.getByEmail(req.body.email);
    if (user){
        return res.status(400).json({
            ok: false,
           msg: 'Este email ya esta registrado'
        });  
    }
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const result = await Users.insertUser(req.body);
   if(result){
    return res.status(200).json({
        ok: true,
        msg: 'Registro exitoso'
    });  
   }
    
};

// login de usuario
const loginUsuario = async (req,res =response) =>{
 
    const { email, password } = req.body;
    const user = await Users.getByEmail(email);
    if (!user){
        return res.status(400).json({
            ok: false,
           msg: 'Email o password no existentes'
        });  
    }
    const validPassword = bcrypt.compareSync(password,user.password);
    if (!validPassword) {
        return res.status(400).json({
            ok : false,
           msg : 'El password no es valido'
        }); 
    }
    
    const token = await generarJWT(user.cus_id, user.cus_name);
    return res.status(200).json({
        ok : true,
        msg: 'login exitoso',
        token: token
    }); 
    



};
// revalidar token
const revalidarToken =async (req, res =response) => {
  
    const {uid, name } = req;
    const token = await generarJWT(uid, name);
    
      return res.json({
          ok : true,
       token
       
      });
     }




module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};
