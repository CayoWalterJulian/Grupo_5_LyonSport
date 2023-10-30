module.exports = function(sequelize, dataTypes){
    let Product_Related = sequelize.define('Product_Related',{
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        id_product:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_related:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    },{
        tableName: 'products_related',
        timestamps: false
    })

    return Product_Related
}