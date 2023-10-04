const products = require('../data/products.json')


const productDetail = (req,res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id)

    res.render('productDetail', {product})
}
 

const productosTotal = (req, res) => {

    res.render('products', { products })

}

const deleteProduct = (req, res) => {
    let id = req.params.id;
    products = products.filter((item) => item.id != id)
    fs.writeFileSync(
    path.join(__dirname, "/data/products.json"),
    JSON.stringify(products, null, 4),
    {
        encoding: "utf-8",
    }
    );
    res.redirect("/products");
    }

module.exports= {
    productDetail,
    productosTotal,
    deleteProduct
}