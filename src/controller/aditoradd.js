const products = require("../data/products.json")
const fs = require("fs")
const path = require("path")

const edit = (req,res)=>{
    res.render("edit")
}
const add = (req,res)=>{
    res.render("add")
}
const create = (req,res)=>{
    const product = req.body;
    product.id = new Date().getTime()
    product.code = new Date().getTime() 
    product.price = +product.price;
    
    products.push(product);

    fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), JSON.stringify(products))

    res.redirect("/products")
}

module.exports= {
    edit,
    add,
    create
}