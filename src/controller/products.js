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


const productsApi = (req,res) => {
    db.Product.findAll()
    .then(product => {
        return res.status(200).json({
            status: 200,
            total: product.length,
            data:product, 
        })
    })
    
}

const productsApiDetail = (req,res) => {
    db.Product.findByPk(req.params.id)
    .then(product => {
        return res.status(200).json({
            status: 200,
            data: product,
            detail: ("http://localhost:3000/api/products/"+product.id)
        })
    })
    
}



module.exports= {
    productDetail,
    productosTotal,
    productsApi,
    productsApiDetail
}

// fs.unlinkSync