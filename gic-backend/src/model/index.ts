// const Users = require("./User.ts")
// const Contacts = require("./Contact.ts")
import User from './user'
import Contact from './contact'
const dbConfig = require("../config/db.config");
const Sequelize:any = require("sequelize");
const sequelize:any = new Sequelize(dbConfig.mysql.DB, dbConfig.mysql.USER, dbConfig.mysql.PASSWORD, {
  host: dbConfig.mysql.HOST,
  dialect: dbConfig.mysql.dialect,
  operatorsAliases: false,
});

const userModel = new User(sequelize,Sequelize)
const contactModel = new Contact(sequelize,Sequelize)
const db:any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.kontak = contactModel.getContact()
db.user = userModel.getUser()
module.exports = db;