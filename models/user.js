'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const UserSchema = new Schema({
  email:{type: String, unique: true, lowercase: true},
  displayName: String,
  avatar: String,
  password: {type: String, select: false},
  signupDate: {type: Date, default: date.now()},
  lastLogin: Date
})

// utilizamos las funciones de middelware de express y los metodos de mongoose para hashear la contraseña antes de almacenarla en mongo
UserSchema.pre('save',(next)=>{
  let user = this;
  //si no ha modificado la contraseña pasamos al siguiente middelware
  if(!user.isModified('password')) return next();

  //si la ha modificado , pasamos a encriptar la contraseña

  bcrypt.genSalt(10,(err,salt)=>{
    if(err) return next(err);
    bcrypt.hash(user.password,(err,hash)=>{
      if(err) return next(err);

      user.password = hash;
      next();
    })
  })
})


//cremoas un nuevo metodo para recurperar el avatar

UserSchema.methods.gravatar = function (){
  //validamos si el mail es nulo para retornar una avatar por defecto
  if(!this.mail) return 'http://gravatar.com/avatar/?s=2006d=retro'
  // hashseamos el mail com md5

  let md5 = crypto.createHash('md5').update(this.email).digest('hex');

  return `http://gravatar.com/avatar/${md5}?s=2006d=retro`

}


module.exports = mongoose.model('user',UserSchema) ;
