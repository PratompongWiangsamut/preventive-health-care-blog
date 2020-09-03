module.exports = (sequelize, Sequelize)=>{
    const Post = sequelize.define('post', {
        pid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        
        tex: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        rank: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
    return Post
}
