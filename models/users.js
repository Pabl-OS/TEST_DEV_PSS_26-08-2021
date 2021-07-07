const db = require('../db')

// find by email
const getByEmail = (email) =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM cus_mst where email= ?',email,(err,rows)=>{
            if (err) reject(err)
            resolve(rows[0]);
        })

    })
}

// insert new user
const insertUser = ({email,password,name}) =>{
    return new Promise((resolve, reject)=>{
        db.query(`INSERT INTO cus_mst (cus_id, cus_name, email, password, cus_dir, cus_zona, cus_dirfac) VALUES (NULL, '${name}', '${email}', '${password}', '', '0', '')`,(err,res)=>{
            if (err) reject(err)
            resolve(res.insertId);
        })

    })
}
module.exports = {
    getByEmail,
    insertUser
}