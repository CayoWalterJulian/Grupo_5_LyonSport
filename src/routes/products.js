const express = require('express');
const { productDetail, productosTotal } = require('../controller/products');


const products = express.Router();


products.get("/", productosTotal)


products.get("/:id", productDetail)


module.exports = {
    products
}