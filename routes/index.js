'use strict'


const express = require('express');
//create a router to route our end points
const api = express.Router()
//import functions controllers
const ProductCtrl = require('../controllers/product');


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

module.exports= api
