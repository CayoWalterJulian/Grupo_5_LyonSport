const products = require("../data/products.json")
const fs = require("fs")
const path = require("path")


const editView = (req,res)=>{
    let id = req.params.id

    const product = products.find(p => p.id === id)
    
    res.render("edit", { product })
}

const edit = (req,res) => {
    req.body.id = req.params.id;
    let productoUpdate = products.map(pdto =>{
        if(pdto.id == req.body.id){
            return pdto = req.body;
        }
        return pdto;
    })
    let productoActualizar = JSON.stringify(productoUpdate,null,2);
    fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),productoActualizar)

    res.redirect('/products')
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

    fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), JSON.stringify(products,null,2))

    res.redirect("/products")
}



module.exports= {
    edit,
    add,
    create,
    editView
}