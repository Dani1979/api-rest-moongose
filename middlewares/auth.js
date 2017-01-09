'use strict'

const jwt = require('jwt');
const moment = require('moment');
const config = require('../config');


// creamos un middleware para verificar la autenticacion


function isAuth(req , res, next) {
  //si no viene la autorizacion en la cabecera, directamente mandamos un mensaje como que no tiene autorizacion y salimos
  if(!req.headers.authorization){
    res.status(403).send({message:`No estas autorizado para acceder al recurso`})
  }

  //en el caso que tengamos atorizacion tenemos que parsear el token que vienen en la cabecera. esta compuesto de dos partes
  //la primera de ellas es el el bearer y separardo por espacion viene el token en si. Para ello con split nos quedamos con el segundo elemento de
  // array

  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.decode(token,config.SECRET_TOKEN);

  if(payload.exp < moment.unix()){
    res.status(401).send({message : `El token ha expirado`})
  }

  req.user = payload.user;
  next();

}

module.exports = isAuth;
