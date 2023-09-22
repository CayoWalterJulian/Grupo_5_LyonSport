const express = require("express");
const multer = require("multer")
const { indexController, productCart, registerController, loginController } = require("../controller");

const router = express.Router();

router.get("/", indexController)

router.get("/carrito", productCart)



const multerDiskStorage =multer.diskStorage({
    destination: (req,res,callback) => {
        const folder = path.join(__dirname, "../public/imageProfile");
        callback(null, folder);
    },
    filename: (req,res,callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})


router.get("/register", registerController.inicio)

router.post("/register", registerController.create)

router.get("/login", loginController)


module.exports = {
    router
}