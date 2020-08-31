const mysql = require("mysql");
const dbConfig = require("../config/env.js");
const Sequelize = require('sequelize')

// Create a connection to the database
/*const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});*/

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./users')(sequelize, Sequelize)
db.post = require('./post')(sequelize, Sequelize)
db.comment = require('./comment')(sequelize,Sequelize)
db.tag = require('./tag')(sequelize,Sequelize)

//post part
db.user.hasMany(db.post, {foreignKey: 'uid', sourceKey: 'uid'})
db.post.belongsTo(db.user, {foreignKey: 'uid', sourceKey: 'uid'})

db.tag.hasMany(db.post, {foreignKey: 'tid', sourceKey: 'tid'})
db.post.belongsTo(db.tag, {foreignKey: 'tid', sourceKey: 'tid'})


//comment part
db.post.hasMany(db.comment, {foreignKey: 'pid', sourceKey: 'pid'})
db.comment.belongsTo(db.post, {foreignKey: 'pid', sourceKey: 'pid'})

db.user.hasMany(db.comment, {foreignKey: 'uid', sourceKey: 'uid'})
db.comment.belongsTo(db.user, {foreignKey: 'uid', sourceKey: 'uid'})

module.exports = db;