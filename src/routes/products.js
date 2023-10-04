const express = require('express');
const { productDetail, productosTotal, deleteProduct } = require('../controller/products');

const products = express.Router();


products.get("/", productosTotal)


products.get("/:id", productDetail)


products.delete("/:id", deleteProduct)


module.exports = {
    products
}