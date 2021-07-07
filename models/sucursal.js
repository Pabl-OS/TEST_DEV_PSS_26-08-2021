const db = require('../db')


const getSucursal = () =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT  suc_desc as 'sucursal' ,suc_geo as 'geolocalizacion',suc_img as 'imagen' FROM alm_mst`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows);
        })

    })
}

const categoriasSucursal = (sucursal) =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT  fam.id_fam as 'id_familia', fam.desc_fam as 'descripcion', fam.url_img as 'url_imagen' FROM fam 
        INNER JOIN sp_mst ON fam.id_fam =sp_mst.sp_prod_fam
         JOIN alm_mst ON alm_mst.suc_id = sp_mst.sp_suc_id WHERE alm_mst.suc_desc= '${sucursal}' GROUP BY fam.desc_fam`,(err,res)=>{
            if (err) reject(err)
            resolve(res);
        });
    })
}
const bannersSucursal = (sucursal) =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT  bann_alm.bann_imagen as 'url_imagen'  FROM bann_alm  INNER JOIN alm_mst ON bann_alm.id_alm = alm_mst.suc_id  WHERE (SELECT CURRENT_TIMESTAMP) BETWEEN fecha_ini AND fecha_fin  AND alm_mst.suc_desc = '${sucursal}'`,(err,res)=>{
            if (err) reject(err)
            resolve(res);
        });
    })
}



module.exports = {
    getSucursal,
    categoriasSucursal,
    bannersSucursal
}