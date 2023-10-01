const User = require('../models/User')
const fs = require('fs')
const path = require("path")

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
const registerController = (req, res) =>{
    User.create(req.body)
    res.redirect('/register')
}
const registerView = (req, res) => {
    res.render('register')
}


module.exports= {
    indexController,
    productCart,
    registerController,
    loginController,
    registerView
}