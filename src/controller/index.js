const indexController = (req,res)=>{
    res.render("index")
}

const productCart = (req,res) => {
    res.render("productCart")
}
const loginController = (req,res)=>{
    res.render("login")
}
const registerController = {
    "inicio" : function(req,res){
        res.render("register")
    },
    "create" : function(req,res){
        res.render("estoy")

        res.redirect("/")
    }
}


module.exports= {
    indexController,
    productCart,
    registerController,
    loginController
}