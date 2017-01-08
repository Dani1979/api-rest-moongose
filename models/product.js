'use strict'


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name:String,
  picture: String,
  price: {
    type:Number,
    default:0},
  category:{
    type:String,
    enum:['Computers','Phones','Accesories']
  },
  description:String})

//exportamos el modelo para que pueda ser utilizado por el resto de la aplicacion
//cuando se creen un nuevo objeto
  module.exports = mongoose.model('Product', ProductSchema)
