const bcryptjs = require('bcryptjs')
const{ validationResult } = require('express-validator')
const db = require('../database/models')


const usersController = {
    
    register: (req, res) => {
        return res.render('register')
    },
    /*no le veo mucha necesidad
    
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
    },*/
    userToCreate: (req,res)=>{
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            profile_img: req.file.profileimg
        });
        res.redirect("/")
    },
    login: (req, res)  => {
        return res.render('login')
    }
    ,
    loginProcess: (req, res) => {
        db.User.findAll()
            .then((User)=>{
                i=0
                razon= true
                while(razon){
                    i++
                    if (db.User[i].email == req.body.email && bcryptjs.compareSync(req.body.password, db.User[i].password)){
                        razon = false
                        res.redirect("/")
                    } else {
                        console.log("datos malos")
                    
                        break
                    }
                }
                
            })
        },
        
    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
}

module.exports = {
    usersController
}
/*const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const{ validationResult } = require('express-validator')
const db = require('../database/models')

const usersController = {
    
    register: (req, res) => {
        return res.render('register')
    },
    
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        let userInDB = User.findByField('email', req.body.email)

        if (userInDB) {
            return res.render('register', {
                errors:{
                    email: {
                        msg: 'Este email ya esta en uso'
                    }
                },
                oldData: req.body
            })
        }

        let userToCreate = (req,res)=>{
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                profile_img: req.file.profileimg
            });
        }
        
        let userCreated = User.create(userToCreate)
        res.redirect('/login')
    },

    // el login

    login: (req, res)  => {
        return res.render('login')
    },
    
    loginProcces: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email)
        
        if(userToLogin) {
            let passwordCompare = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passwordCompare) {
                delete userToLogin.password
                req.session.userLogged = userToLogin

                
                if(req.body.remember) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                }

                return res.redirect ('/')
            }
            return res.render('login', {
                errors:{
                    email: {
                        msg: 'Los datos ingresados no son correctos'
                    }
                }
            })
        }
        return res.render('login', {
            errors:{
                email: {
                    msg: 'Este correo electronico no se encuentra registrado'
                }
            }
        })
    },


    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
}

module.exports = {
    usersController
}*/ 