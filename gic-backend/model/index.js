const User = require("./user.js")
const Contact = require("./contact.js")
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.mysql.DB, dbConfig.mysql.USER, dbConfig.mysql.PASSWORD, {
  host: dbConfig.mysql.HOST,
  dialect: dbConfig.mysql.dialect,
  operatorsAliases: false,
});

const userModel = new User(sequelize,Sequelize)
const contactModel = new Contact(sequelize,Sequelize)
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.kontak = contactModel.getContact()
db.user = userModel.getUser()
module.exports = db;