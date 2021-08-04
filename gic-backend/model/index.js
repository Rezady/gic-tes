const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.mysql.DB, dbConfig.mysql.USER, dbConfig.mysql.PASSWORD, {
  host: dbConfig.mysql.HOST,
  dialect: dbConfig.mysql.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.kontak = require("./kontak.js")(sequelize, Sequelize);
db.user = require("./user.js")(sequelize,Sequelize)
module.exports = db;
