const products = require('../data/products.json')
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
    const productId = req.params.id

    const productTmp = products.filter((c) => c.id !== productId)
    fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), JSON.stringify(productTmp))
    
    res.redirect('/products');
    }


    
module.exports= {
    productDetail,
    productosTotal,
    deleteProduct
}