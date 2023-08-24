const express = require("express");
const loginController = require("../controller/login");


const login = express.Router();

login.get("/", loginController)

module.exports = login