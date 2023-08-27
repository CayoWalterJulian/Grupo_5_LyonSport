const express = require("express");
const {edit, add} = require("../controller/aditoradd");


const editoradd = express.Router();

editoradd.get("/edit", edit)

editoradd.get("/add", add)

module.exports = {
    editoradd
}