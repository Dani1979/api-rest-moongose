'use strict'


const express = require('express');
//create a router to route our end points
const api = express.Router()
//import functions controllers
const ProductCtrl = require('../controllers/product');
// import middleware to validate sesion token
const auth = require('../middelwares/auth');

//end point to get de products
api.get('/product',ProductCtrl.getProducts)
//end point to get de product by Id
api.get('/product/:productId',ProductCtrl.getProduct)
//endPoint to save the product
api.post('/product',ProductCtrl.saveProduct)
//end point to update de product
api.put('/product/:productID',ProductCtrl.updateProduct)
//end point to delete de product
api.delete('/product/:productID',ProductCtrl.deleteProduct)
//protected end point with middleware
api.get('/prueba',auth.isAuth,function(req,res){
  res.status(200).send({message: `La autorizacion ha sido corecta`})

})



module.exports= api
