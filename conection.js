const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudReact')

const objectbd = mongoose.connection

objectbd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objectbd.on('error', ()=>{console.log('Error en la conexion a MongoDB')})

module.exports =mongoose