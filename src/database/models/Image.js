module.exports = function(sequelize, dataTypes){
    let Image = sequelize.define('Image',{
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        central_image:{
            type: dataTypes.STRING,
        },
        image_angle1:{
            type: dataTypes.STRING,
        },
        image_angle2:{
            type: dataTypes.STRING,
        },
        image_angle3:{
            type: dataTypes.STRING,
        }
    },{
        tableName: 'images',
        timestamps: false
    })

    Image.associate = function(models) {
        Image.hasOne(models.Product, {
            as: 'product',
            foreignKey: 'id_image'
        })
    }

    return Image
}