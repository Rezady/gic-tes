"use strict";
const User = require("./user.ts");
const Contact = require("./contact.ts");
const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	dbConfig.mysql.DB,
	any,
	dbConfig.mysql.USER,
	any,
	dbConfig.mysql.PASSWORD,
	any,
	{
		host: dbConfig.mysql.HOST,
		any,
		dialect: dbConfig.mysql.dialect,
		any,
		operatorsAliases: false,
	}
);
const userModel = new User(sequelize, Sequelize);
const contactModel = new Contact(sequelize, Sequelize);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.kontak = contactModel.getContact();
db.user = userModel.getUser();
module.exports = db;
