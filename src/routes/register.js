const express = require("express");
const registerController = require("../controller/register");


const register = express.Router();

register.get("/", registerController)

module.exports = register
