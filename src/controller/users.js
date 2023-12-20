const bcryptjs = require('bcryptjs')
const{ validationResult } = require('express-validator')
const db = require('../database/models')

const usersController = {
    
    register: (req, res) => {
        return res.render('register')
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req)

        db.User.findOne({ where: { email: req.body.email}})
            .then(error => {
                if(error !== null){
                    return res.render('register', {
                        errors:{
                            email: {
                                msg: 'Este email ya esta en uso'
                            }
                        },
                        oldData: req.body
                    })
                }
            }
            )
            db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            profile_img: req.file.filename
        });
        
        res.redirect('/login')
    },

    login: (req, res)  => {
        return res.render('login')
    },

    loginProcess: (req, res) => {
        db.User.findOne({ where: { email: req.body.email}})
            .then(user => {
                
                if(user !== null) {
                    let passwordCompare = bcryptjs.compareSync(req.body.password, user.password)
                    if (passwordCompare) {                          
                            if(req.body.remember) {
                                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                            }
                            return res.redirect('/profile')
            
                        }
                    }else{
                    return res.render('login', {
                        errors:{
                            email: {
                                msg: 'Este correo electronico no se encuentra registrado'
                            }
                        }
                    })
                }

                
            })
        
    }
    ,    
    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
    ,
    pageDeleteAccount:(req, res) => {
        return res.render('deleteAccount')
    },
    deleteAccount:(req,res) => {
        db.User.findOne({ where: { email: req.body.email}})
            .then(user => {
                
                if(user !== null) {
                    let passwordCompare = bcryptjs.compareSync(req.body.password, user.password)
                    if (passwordCompare) {
                        res.clearCookie('userEmail')
                        req.session.destroy()
                        db.User.destroy({
                            
                            where:{
                                email: req.body.email,
                            }
                            
                            
                        })
                        res.redirect("/profile")
                    } else {
                        res.redirect("/profile")
                    }
                }
            })
    },
    profile: (req, res) => {
        res.render('profile', {
            user: req.session.userLogged
        })
    },

    edit: (req, res) => {
        db.User.findByPk(req.session.userLogged.id)
            .then(data => {
                
            })
    },

    dataUsersApi : (req,res) => {
        db.User.findAll()
        .then(users => {
            return res.status(200).json({
                status: 200,   
                total: users.length,   
                data:users
            })
        })
        
    },
    
    dataUsersApi2 : (req,res) => {
        db.User.findByPk(req.params.id)
        .then(users => {
            return res.status(200).json({
                status: 200,     data: users,   detail: ("http://localhost:3000/api/users/"+users.id)
        })
    })
   },
     
}

module.exports = {
    usersController
}
