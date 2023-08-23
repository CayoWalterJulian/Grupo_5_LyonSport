const express = require("express");
const { airForce,
    airMax,
    jordan,
    react } = require("../controller/products");


const products = express.Router();

products.get("/airForce", airForce)

products.get("/airMax", airMax)

products.get("/jordan", jordan)

products.get("/react", react)

module.exports = {
    products
}