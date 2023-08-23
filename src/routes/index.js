const express = require("express");
const { indexController, productCart } = require("../controller");


const router = express.Router();

router.get("/", indexController)

router.get("/carrito", productCart)

module.exports = {
    router
}