const express = require("express");
const multer = require("multer")
const { indexController, productCart, registerController, loginController, registerView } = require("../controller");
const { check } = require('express-validator');

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


router.get("/register", registerView)

router.post("/users", registerController)

router.get("/login", loginController)

router.post("/logout", loginController)

module.exports = {
    router
}