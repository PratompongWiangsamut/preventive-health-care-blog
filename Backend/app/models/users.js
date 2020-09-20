module.exports = (sequelize, Sequelize)=>{
    const User = sequelize.define('user', {
        uid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        role:{
            type:Sequelize.INTEGER,
            allowNull: false
        }
    })
    return User
}