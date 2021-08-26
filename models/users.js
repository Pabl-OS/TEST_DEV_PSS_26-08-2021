const db = require('../db')

// find by email
const getByEmail = (email) =>{
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM admin where email= ?',email,(err,rows)=>{
            if (err) reject(err)
            resolve(rows[0]);
        })

    })
}

// insert new admin
const insertUser = ({email,password,name}) =>{
    return new Promise((resolve, reject)=>{
        db.query(`INSERT INTO admin (id_admin, name, email, password) VALUES (NULL, '${name}', '${email}', '${password}')`,(err,res)=>{
            if (err) reject(err)
            resolve(res.insertId);
        })

    })
}
module.exports = {
    getByEmail,
    insertUser
}