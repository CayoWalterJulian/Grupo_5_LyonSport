const express = require("express");
const { productDetail } = require("../controller/products");


const products = express.Router();

products.get("/:id", productDetail)



module.exports = {
    products
}