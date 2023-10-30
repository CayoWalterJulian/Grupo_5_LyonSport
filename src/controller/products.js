const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const productDetail = (req,res) => {
    db.Product.findByPk(req.params.id,{
        include: [{association: 'images'}]
    })
        .then((product) => {
            res.render('productDetail', {product: product})
        })

}
 

const productosTotal = (req, res) => {
    db.Product.findAll({
        include: [{association: 'images'}]
    })
        .then(function(products){
            return res.render('products', { products : products })
        })
}



module.exports= {
    productDetail,
    productosTotal
}

// fs.unlinkSync