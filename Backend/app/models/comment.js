module.exports = (sequelize, Sequelize)=>{
    const Comment = sequelize.define('comment', {
        cid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        detail: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        rate:{
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    })
    return Comment
}
