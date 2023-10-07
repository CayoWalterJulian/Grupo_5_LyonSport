const fs = require ('fs')

let logMiddleware = (req, res, cb) =>{
    fs.writeFileSync('log.txt', 'Se ingreso en la pagina ' + req.url);

    next();
}


module.exports=logMiddleware