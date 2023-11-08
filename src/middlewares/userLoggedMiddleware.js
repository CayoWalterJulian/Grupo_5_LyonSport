const db = require('../database/models')

const userLoggedMiddleware = async (req, res, next) => {
    res.locals.isLogged = false
    
    let emailInCookie = req.cookies.userEmail
    console.log(req.session);
    if(req.session.userLogged == emailInCookie){
        res.locals.isLogged = true

    }
    if(emailInCookie && !req.session.userLogged){
        const user = await db.User.findOne({ where: { email: emailInCookie }})
        if(user){
            req.session.userLogged = user
            res.locals.isLogged = true
        }
    
    }
    next()
};

module.exports = userLoggedMiddleware