const express = require("express");
const registerController = require("../controller/register");



const register = express.Router();

register.get("/", registerController.inicio)

register.post("/", registerController.create)

module.exports = register
