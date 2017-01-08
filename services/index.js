'use strict'

//library to handler jason web tokens
const jwt = require('jwt');
//library  to handler dates and parse them
const moment = require('moment');
//create a file with secret key code
const config = require('../config');


function createToken(user) {
  // un toquen se forma de 3 partes. La primera la cabecera en la que se indica el tipo de algoritmode encriptacion y el typo de tokens
  //la segunda es el Layaut. este puede contener 3 tipos de informacion , reservada, publica y privada. Normalmente vienen los datos de id de usuario etc
  // la ultima parte en la codificacion de las anterores partes + una clave secreta que se almacena en el servidor para generar un nuevo codigo
  // las 3 partes s ecodifican en base 64 . Mas informacion en https://jwt.io/introduction/

  const payload = {
    sub : user._id,
    //fecha de creacion del token
    iat : moment.unix(),
    //fecha de caducidad
    exp : moment.add(14,'days').unix(),
  }
  return jwt.encode(payload, config.SECRET_TOKEN);
}


module.exports = createToken;
