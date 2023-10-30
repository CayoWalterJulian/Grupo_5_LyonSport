module.exports = function(sequelize, dataTypes){
    let Related = sequelize.define('Related',{
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        price:{
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        }
    },{
        tableName: 'related',
        timestamps: false
    })

    return Related
}