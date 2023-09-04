const registerController = {
    "inicio" : function(req,res){
        res.render("register")
    },
    "create" : function(req,res){
        res.render("estoy")

        res.redirect("/")
    }
}

module.exports= registerController
