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
        tag: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        tex: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        rank: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        report:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
    return Post
}
/*this.title = post.title;
this.tag = post.tag;
this.tex = post.tex;
this.belong = post.belong;
this.rank = post.rank;*/