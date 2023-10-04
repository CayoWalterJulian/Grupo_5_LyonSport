let products = require('../data/products.json')
const fs = require('fs')
const path = require('path')

const productDetail = (req,res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id)

    res.render('productDetail', {product})
}
 

const productosTotal = (req, res) => {

    res.render('products', { products })

}

const deleteProduct = (req, res) => {
    let productId = req.params.id


    let fotoProducto = products.find((item) => item.id == productId)
    let fotoPath = path.join(__dirname, '../../public/images/products' + fotoProducto.centralImage)
    if (fs.existsSync(fotoPath)) {
        fs.unlinkSync(fotoPath)
    }



    products = products.filter((c) => c.id !== productId)
    fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(products,null, 2))
    
    res.redirect('/products');
}


    
module.exports= {
    productDetail,
    productosTotal,
    deleteProduct
}

// fs.unlinkSync