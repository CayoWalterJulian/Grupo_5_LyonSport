const db = require('../database/models')

const userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false
    
    let emailInCookie = req.cookies.userEmail
    db.User.findOne({ where: { email: emailInCookie}})
        .then(data => {
            if (data) {
                req.session.userLogged = userFromCookie
            }
            if(req.session.userLogged) {
                res.locals.isLogged = true
            }
        })



    next()
};

module.exports = userLoggedMiddleware