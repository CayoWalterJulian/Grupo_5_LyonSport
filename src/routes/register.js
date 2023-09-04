const express = require("express");
const registerController = require("../controller/register");
const multer = require("multer")

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

const register = express.Router();

register.get("/", registerController.inicio)

register.post("/", registerController.create)

module.exports = register
