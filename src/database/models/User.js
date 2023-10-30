module.exports = function(sequelize, dataTypes){
    let User = sequelize.define('User',{
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false
        },
        password:{
            type: dataTypes.STRING,
            allowNull: false
        },
        profile_img: {
            type: dataTypes.STRING
        }
    },{
        tableName: 'users',
        timestamps: false
    })

    return User
}