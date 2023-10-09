
const bcryptjs = require('bcryptjs')
const{ validationResult } = require('express-validator')




const indexController = (req,res)=>{
    res.render("index")
}

const productCart = (req,res) => {
    res.render("productCart")
}
const loginController = (req,res)=>{
    const loginData =req.body;
    const user = getUserByEmail(loginData.email)
    const passwordCorrect= bcryptjs.compareSync(loginData.password, user.password)
    /*if (users[id].online == true){
        return res.redirect("/")
    }*/
    
    res.render("login")
    res.redirect("/")
}

/*const logout = (req, res) =>{
    req.session.destroy()
    res.redirect("/")
}*/
const registerController = {
    register: (req, res) => {
        return res.render('register')
    },
    
    proccesRegister: (req, res) => {
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
    
        let userToCreate = {
            ...req.body,
            profileimg: req.file.filename,
            password: bcryptjs.hashSync(req.body.password, 10)
            // avatar: req.file.filename
        }
        
        User.create(userToCreate)
        res.redirect('/register')
    }
}
const registerontroller = (req, res) =>{


    



}
const registerView = (req, res) => {
    res.render('register')
}


module.exports= {
    indexController,
    productCart,
    loginController,
    registerController
}