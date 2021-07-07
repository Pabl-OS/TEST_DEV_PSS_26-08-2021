const express = require('express');
require('dotenv').config();
const cors = require('cors');


const app = express();
// cors
app.use( cors() );

//base de datos

// lectura y parseo del body

app.use(express.json());
//rutas 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/sucursales', require('./routes/sucursales'));
app.use('/api/productos', require('./routes/producto'));
app.use('/api/generales', require('./routes/generales'));



app.listen(process.env.PORT, ()=>{
    console.log(`Servicio corriendo en el puerto ${process.env.PORT}` );
})