const indexController = (req,res)=>{
    res.render("index")
}

const productCart = (req,res) => {
    res.render("productCart")
}



module.exports = {
    indexController,
    productCart
}