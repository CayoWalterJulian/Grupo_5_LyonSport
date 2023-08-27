const products = require('../data/products.json')


const productDetail = (req,res) => {
    const { id } = req.params;
    const product = products.find(p => p.id == id)

    res.render('productDetail', {product})
}
 

module.exports= {
    productDetail
}