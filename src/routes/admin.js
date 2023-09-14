const express = require('express')
const admin = express.Router();

const {edit,
    add,
    create,
    editView} = require("../controller/admin");




admin.get("/add", add)
admin.post("/products", create)

admin.get("/edit/:id", editView)
admin.put('/edit/:id', edit)




module.exports = {
    admin
}