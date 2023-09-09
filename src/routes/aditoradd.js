const express = require("express");
const {edit, add} = require("../controller/aditoradd");
const multer = require("multer");

const editoradd = express.Router();

const {edit,
    add,
    create,
    editView} = require("../controller/aditoradd");




editoradd.get("/add", add)


editoradd.get("/edit/:id", editView)
editoradd.put('/edit/:id', edit)


editoradd.post("/products", create)

module.exports = {
    editoradd
}