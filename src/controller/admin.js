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
    let file = req.file;

    const productsData = fs.readFileSync(path.resolve(__dirname, '../data/products.json'));
    const products = JSON.parse(productsData);

    const productoAEditar = products.find(pdto => pdto.id == req.body.id);


    // Actualiza solo los campos proporcionados en req.body, manteniendo el valor predeterminado si no se proporciona
    Object.keys(req.body).forEach(key => {
        if (req.body[key] !== undefined) {
            productoAEditar[key] = req.body[key];
        }
    }); 

    products.centralImage = `images/products/${file.filename}`
        
    const productoActualizar = JSON.stringify(products, null, 2);

    fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), productoActualizar);

    res.redirect('/products');
}

const add = (req,res)=>{
    res.render("add")
}

const create = (req,res)=>{
    const product = {
        "id":new Date().getTime().toString(),
        "code":new Date().getTime().toString(),
        "price": req.body.price,
        "name": req.body.name,
        "centralImage": "/images/products/"+req.file.filename,
      /*    "imageAngle1": "/images/nuevosproductos/"+req.file.filename+"1",
      "imageAngle2": "/images/nuevosproductos/"+req.file.filename+"2",
        "imageAngle3": "/images/nuevosproductos/"+req.file.filename+"3",
        "imageAngle4": "/images/nuevosproductos/"+req.file.filename+"4"*/
    }  
    
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