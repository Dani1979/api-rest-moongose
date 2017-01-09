'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config= require('./config');


// Before stand up the server, we make sure that the conexion to database is satisfactory

mongoose.connect(config.db ,(err, res)=>{
  if(err){
    return console.log(`Error al conectar a la BD:${err}`);
  }
  console.log('Conexion a la BD establecida');

  //Once the conection is established, stand up the server
  app.listen(config.port,() => {
    console.log(`API Rest corriendo en hhtp://localhost:${config.port}`);
  });

});
