const express = require('express')
const admin = express.Router();
const upload = require("../middlewares/productMulterMiddleware")

const {edit,
    add,
    create,
    editView,
    deleteProduct} = require("../controller/admin");





admin.get("/add", add)
admin.post("/products", upload.fields([
    { name: 'centralImage', maxCount: 1 },
    { name: 'imageAngle1', maxCount: 1 },
    { name: 'imageAngle2', maxCount: 1 },
    { name: 'imageAngle3', maxCount: 1 }
]), create)




admin.get("/edit/:id", editView) 
admin.put('/edit/:id', upload.fields([
    { name: 'centralImage', maxCount: 1 },
    { name: 'imageAngle1', maxCount: 1 },
    { name: 'imageAngle2', maxCount: 1 },
    { name: 'imageAngle3', maxCount: 1 }
]), edit)


admin.delete("/products/:id", deleteProduct)


module.exports = {
    admin
}