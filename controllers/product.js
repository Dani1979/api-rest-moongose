'use strict'


const Product = require('../models/product');


function getProduct(req, res){

  // get productId param to select database
  let productId = req.params.productId

    Product.findById(productId,(err,product) =>{
      if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if(!product) return res.status(404).send({message:`El producto no existe: ${productId}`})
      //with ECDMA script 6  if the key and value is the same, who is the case {product:product}
      //you can write only de key , abbreviating then code
      res.status(200).send({product})
    })
}

function getProducts(req,res){

  Product.find({},(err,products)=>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
    if(!products) return res.status(404).send({message: 'No hay productos en la BD'})
    res.status(200).send({products})

  })

}

function saveProduct(req,res){

  // thanks to the library body-parser ,  whe can get the body of the message
  let product = new Product()
  product.name= req.body.name
  product.picture= req.body.picture
  product.price= req.body.price
  product.category=req.body.category
  product.descripction= req.body.description

  product.save((err,productStore)=>{
    if(err) res.status(500).send({message:`Error al salvar en BD :${err}`})
    res.status(200).send({product:productStore})
  })

}

function updateProduct(req,res){
  let productID = req.params.productID
  //create a variable with de body for de update
  let update = req.body
  //first param is the product to update, second param is data to update
  Product.findByIdAndUpdate(productID,update,(err, productUpdated) => {
    if(err) res.status(500).send({message: `Error al actualizar el recurso`})
    res.status(200).send({message:`Se ha actualizado el producto ${productUpdated}`})
  })

}


function deleteProduct(req,res){
  let productID = req.params.productID;
  Product.findById(productID, (err, product) => {
    if(err) res.status(500).send({message:`Error al la peticion a BD ${err}`})
    if(!product) res.status(400).send({message: `message: El producto: ${productID} no existe en BD`})
    if(product){
      product.remove(err =>{
        if(err) res.status(500).send({message:`Error al borrar el producto de la bd ${err}`})
        res.status(200).send({message:`El producto ha sido borrado correctamente`})
      })
    }
  })
}

// export an object with de model function
module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
