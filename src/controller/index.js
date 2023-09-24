const indexController = (req,res)=>{
    res.render("index")
}

const productCart = (req,res) => {
    res.render("productCart")
}
const loginController = (req,res)=>{
    /*if (req.session.isUserLogger){
        return res.redirect("/")
    }*/
    res.render("login")
}
/*const logout = (req, res) =>{
    req.session.destroy()
    res.redirect("/")
}*/
const registerController = {
    /*if (req.session.isUserLogger){
        return res.redirect("/")
    }*/
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