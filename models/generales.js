const db = require('../db')

//  model for get data general
const getGenerals = () =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT det_gen.c_min AS 'monto_minimo', det_gen.tel_what1 AS 'telefono_1', det_gen.tel_what2 AS 'telefono_2' FROM det_gen`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows);
        })

    })
}

// model fot get banners generals 
const getBannersGenerals = () =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT bann_g.bann_imagen as 'url_imagen'  FROM bann_g WHERE (SELECT CURRENT_TIMESTAMP) BETWEEN f_inicial AND f_final`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows);
        })

    })
}




module.exports = {
    getGenerals,
    getBannersGenerals
}