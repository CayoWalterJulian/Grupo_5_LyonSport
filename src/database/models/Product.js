module.exports = function(sequelize, dataTypes){
    let Product = sequelize.define('Product',{
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        price:{
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        id_image:{
            type: dataTypes.INTEGER
        }
    },{
        tableName: 'products',
        timestamps: false,
        paranoid: true
    })

    Product.associate = function(models) {
        Product.belongsTo(models.Image, {
            as: 'images',
            foreignKey: 'id_image'
        })
    }

    return Product
}