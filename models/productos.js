const db = require('../db')


const getProducts = (sucursal,categoria) =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT prod_mst.prod_id as 'id_producto', prod_mst.prod_desc as 'desc_larga' ,prod_mst.prod_desc_c  as 'desc_corta' ,prod_mst.prod_img as 'url_imagen', lpcom_mst.lpcom_precio_id as 'precio'
        FROM prod_mst INNER JOIN sp_mst ON prod_mst.prod_id = sp_mst.sp_prod JOIN alm_mst ON alm_mst.suc_id = sp_mst.sp_suc_id JOIN fam ON sp_mst.sp_prod_fam = fam.id_fam 
         JOIN lpcom_mst ON sp_mst.sp_Ipcom_id =lpcom_mst.lpcom_id WHERE alm_mst.suc_desc = '${sucursal}' AND fam.desc_fam = '${categoria}'`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows);
        })

    })
}
const getPackage = (sucursal) =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT pq_mst.paq_id as 'id_paquete',pq_mst.paq_desc_c 'desc_corta',pq_mst.paq_img as 'url_imagen', pq_mst.paq_precio as 'paquete', pq_mst.paq_desc as 'desc_largo' FROM pq_mst INNER JOIN alm_mst ON pq_mst.paq_suc_id = alm_mst.suc_id WHERE alm_mst.suc_desc='${sucursal}' AND CURRENT_TIMESTAMP() BETWEEN pq_mst.paq_fini AND pq_mst.paq_ffin`,(err,rows)=>{
            if (err) reject(err)
            resolve(rows);
        })

    })
}



module.exports = {
   getProducts,
   getPackage
}