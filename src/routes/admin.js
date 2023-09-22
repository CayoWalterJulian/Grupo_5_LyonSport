const express = require('express')
const multer = require ("multer")
const admin = express.Router();
const path = require("path")

const {edit,
    add,
    create,
    editView} = require("../controller/admin");




admin.get("/add", add)
admin.post("/products", imageProducts.single("imageProduct"), create)

const createDiskStorage = multer.diskStorage({
    destination: (req,res,callback) => {
        const folder = path.join(__dirname, "../public/images/nuevosProductos");
        callback(null, folder);
    },
    filename: (req,res,callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})

admin.get("/edit/:id", editView) 
admin.put('/edit/:id', edit)



let imageProducts = multer({ storage: createDiskStorage})
module.exports = {
    admin
}