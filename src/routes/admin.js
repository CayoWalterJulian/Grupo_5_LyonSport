const express = require('express')
const admin = express.Router();

const {edit,
    add,
    create,
    editView} = require("../controller/admin");




admin.get("/add", add)


admin.get("/edit/:id", editView)
admin.put('/edit/:id', edit)


admin.post("/products", create)


module.exports = {
    admin
}