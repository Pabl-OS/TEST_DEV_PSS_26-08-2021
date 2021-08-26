const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
// cors
app.use( cors() );

app.use(express.json());
//rutas 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/people', require('./routes/peoples'));



app.listen(process.env.PORT  || 5000, ()=>{
    console.log(`Servicio corriendo en el puerto ${process.env.PORT}` );
});
    