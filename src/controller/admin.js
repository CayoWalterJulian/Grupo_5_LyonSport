const products = require("../data/products.json")
const fs = require("fs")
const path = require("path")
const db = require('../database/models')


const editView = (req,res)=>{
    db.Product.findByPk(req.params.id)
        .then((product) => {
            res.render('edit', { product: product})
        })
}

const edit = async (req, res) => {
    const t = await db.sequelize.transaction();

    try {
        const product = await db.Product.findOne({
            where: {
                id: req.params.id
            }
        }, { transaction: t });

        if (!product) {
            throw new Error('Producto no encontrado');
        }

        await db.Product.update({
            price: req.body.price,
            name: req.body.name,
        }, {
            where: {
                id: req.params.id
            }
        }, { transaction: t });

        await db.Image.update({
            central_image: req.files['centralImage'][0].filename,
            image_angle1: req.files['imageAngle1'][0].filename,
            image_angle2: req.files['imageAngle2'][0].filename,
            image_angle3: req.files['imageAngle3'][0].filename
        }, {
            where: {
                id: product.id_image
            }
        }, { transaction: t });

        await t.commit();

        res.redirect("/products");
    } catch (error) {
        await t.rollback();
        res.status(500).send(error);
    }
};



const add = (req,res)=>{
    res.render("add")
}

const create = async (req, res) => {
    const t = await db.sequelize.transaction();

    try {
        const image = await db.Image.create({
            central_image: req.files['centralImage'][0].filename,
            image_angle1: req.files['imageAngle1'][0].filename,
            image_angle2: req.files['imageAngle2'][0].filename,
            image_angle3: req.files['imageAngle3'][0].filename
        }, { transaction: t });

        const product = await db.Product.create({
            price: req.body.price,
            name: req.body.name,
            id_image: image.id
        }, { transaction: t });

        await t.commit();

        res.redirect("/products");
    } catch (error) {
        await t.rollback();
        res.status(500).send(error);
    }
};




const deleteProduct = (req, res) => {
    db.Product.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect("/products")
}



module.exports= {
    edit,
    add,
    create,
    editView,
    deleteProduct
}