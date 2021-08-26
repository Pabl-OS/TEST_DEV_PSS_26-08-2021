const db = require('../db')


const findRFC = async (rfc) =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM tb_personasfisicas WHERE RFC= '${rfc}'`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows[0]);
        })

    })
}
//  model for get all people
const getAllPeople = async () =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM tb_personasfisicas`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows);
        })

    })
}
//  model for get  people
const getPeople = async (id) =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM tb_personasfisicas WHERE IdPersonaFisica= ${id}`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows);
        })

    })
}

// model for register new people
const registerPeople = async({
    Nombre,
    ApellidoPaterno,
    ApellidoMaterno,
    RFC,
    FechaNacimiento,
    UsuarioAgrega,
    Activo
}) =>{
    return new Promise((resolve, reject)=>{
        db.query(`INSERT INTO tb_personasfisicas (IdPersonaFisica,FechaRegistro,FechaActualizacion,Nombre,ApellidoPaterno,ApellidoMaterno,RFC,FechaNacimiento, UsuarioAgrega, Activo) 
                 VALUES (NULL, (select CURDATE()), '', '${Nombre}', '${ApellidoPaterno}', '${ApellidoMaterno}', '${RFC}', 
                         '${FechaNacimiento}', '${UsuarioAgrega}', '${Activo}')`,(err,res)=>{
                if (err) reject(err)
              resolve(res.insertId);
        })

    })
}

// model for Update  people
const updatePeople = async({
    IdPersonaFisica,
    Nombre,
    ApellidoPaterno,
    ApellidoMaterno,
    RFC,
    FechaNacimiento,
    UsuarioAgrega,
    Activo
}) =>{
    return new Promise((resolve, reject)=>{
        db.query(`UPDATE tb_personasfisicas 
            SET FechaActualizacion = (select CURDATE()), Nombre = '${Nombre}', ApellidoPaterno = '${ApellidoPaterno}', 
            ApellidoMaterno = '${ApellidoMaterno}',RFC = '${RFC}',FechaNacimiento = '${FechaNacimiento}',
            UsuarioAgrega = '${UsuarioAgrega}', Activo = '${Activo}' WHERE tb_personasfisicas.IdPersonaFisica = ${IdPersonaFisica}`,(err,res)=>{
                if (err) reject(err)
              resolve('actualizado con exito');
        })

    })
}
const deletePeople = async({ IdPersonaFisica}) =>{
    return new Promise((resolve, reject)=>{
        db.query(`DELETE FROM tb_personasfisicas WHERE tb_personasfisicas.IdPersonaFisica = ${IdPersonaFisica}`,(err,res)=>{
                if (err) reject(err)
              resolve('Eliminado con exito');
        })

    })
}

module.exports = {
    getAllPeople,
    registerPeople,
    updatePeople,
    deletePeople,
    getPeople,
    findRFC
}