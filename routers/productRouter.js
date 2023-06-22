const express = require('express');
const Product = require('../models/productModel')//model 
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controler')

const router = express.Router();

//show data
router.get('/', getProducts);

//find by ID
router.get('/:id', getProduct);

//add product
router.post('/', createProduct);

// update product
router.put('/:id', updateProduct);

// delete product
router.delete('/:id', deleteProduct);

module.exports = router;