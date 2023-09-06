const products = require('../data/products.json')


const productDetail = (req,res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id)

    res.render('productDetail', {product})
}
 

const productosTotal = (req, res) => {

    res.render('products', { products })

}

module.exports= {
    productDetail,
    productosTotal
}