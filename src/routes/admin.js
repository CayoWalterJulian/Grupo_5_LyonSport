const express = require('express')
const multer = require ("multer")
const admin = express.Router();
const path = require("path");
const upload = require('../middlewares/multerMid')

const {edit,
    add,
    create,
    editView} = require("../controller/admin");



admin.get("/add", add)
admin.post("/products", upload.single('centralImage') , create)




admin.get("/edit/:id", editView) 
admin.put('/edit/:id', upload.single('centralImage'), edit)



module.exports = {
    admin
}