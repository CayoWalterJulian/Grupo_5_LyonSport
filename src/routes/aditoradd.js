const express = require("express");
const {editView,edit , add} = require("../controller/aditoradd");
const multer = require("multer")


const editoradd = express.Router();

editoradd.get("/add", add)


editoradd.get("/edit/:id", editView)
editoradd.put('/edit/:id', edit)


module.exports = {
    editoradd
}