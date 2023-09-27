const express = require('express')
const multer = require ("multer")
const admin = express.Router();
const path = require("path");

const {edit,
    add,
    create,
    editView} = require("../controller/admin");



    const storage = multer.diskStorage({
        destination: (req,file,cb) => {
            cb(null, path.resolve(__dirname, "../../public/images/nuevosproductos"));
        },
        filename: (req,file,cb) => {
            const imageName = "photo-" + Date.now() + path.extname(file.originalname);
            cb(null, imageName);
        }
    })

let upload = multer({ storage })



admin.get("/add", add)
admin.post("/products", upload.single('centralImage'), create)






admin.get("/edit/:id", editView) 
admin.put('/edit/:id', upload.single('centralImage'), edit)



module.exports = {
    admin
}