const Op = db.Sequelize.Op;
const db = require('../src/database/models')


function buscar(){
    let query= document.getElementById("barra").value;
    console.log(query);
    db.Product.findAll({
        include: [{association: 'images'}]
    })
    .then(function(products){if (query = ""){
            return res.render('products', { products : products })
        } else{
            let prodBuscados = db.Product({
                where:{
                    name:{[Op.like]:"%"+query+"%"}
            }})
            return res.render("products", prodBuscados)

        }
    })
    }



module.exports = (buscador)