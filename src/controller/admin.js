const products = require("../data/products.json")
const fs = require("fs")
const path = require("path")
const db = require('../database/models')


const editView = (req,res)=>{
    db.Product.findByPk(req.params.id)
        .then((product) => {
            res.render('edit', { product: product})
        })
}

const edit = (req, res) => {
    db.Product.update({
        price: req.body.price,
        name: req.body.name,
    },{
        where:{
            id: req.params.id
        }
    })

    res.redirect("/products")
}


const add = (req,res)=>{
    res.render("add")
}

const create = (req,res)=>{
    db.Product.create({
        price: req.body.price,
        name: req.body.name,
    })

    res.redirect("/products")
}

const deleteProduct = (req, res) => {
    db.Product.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect("/products")
}



module.exports= {
    edit,
    add,
    create,
    editView,
    deleteProduct
}