module.exports = (sequelize, Sequelize)=>{
    const Tag = sequelize.define('tag', {
        tid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING(40),
            allowNull: false
        }
    })
    return Tag
}
