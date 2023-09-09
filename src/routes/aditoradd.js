const express = require("express");
const editoradd = express.Router();
const multer = require("multer");

const {edit,
    add,
    create} = require("../controller/aditoradd");




editoradd.get("/edit", edit)

editoradd.get("/add", add)

editoradd.post("/products", create)

module.exports = {
    editoradd
}