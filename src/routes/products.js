const express = require('express');
const { productDetail, productosTotal, productsApi, productsApiDetail} = require('../controller/products');

const products = express.Router();


products.get("/products/", productosTotal)

products.get("/products/:id", productDetail)


products.get("/api/products", productsApi)

products.get("/api/products/:id", productsApiDetail)


module.exports = {
    products
}