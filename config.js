'use strict'


module.exports ={
  port: process.env.PORT || 3001,
  db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
  // clave para generar el token. Normalmente es una clave hexadecimal de 128 caracteres
  SECRET_TOKEN:'MiClaveDeToken'
}
