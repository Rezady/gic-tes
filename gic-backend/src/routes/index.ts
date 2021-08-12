var express = require("express");
var router = express.Router();
var Controller = require("../controller/controller");
var ControllerLogin = require("../controller/controllerLogin");
var Auth = require("../middleware/auth");
const db = require("../model");
const User = db.user;
import { body, CustomValidator } from "express-validator";

// memastikan email bersifat unique
const isValidUser: CustomValidator = (value) => {
	return User.findOne({
		where: {
			email: value,
		},
	}).then((user: any) => {
		if (user) {
			return Promise.reject("Email Sudah Digunakan");
		}
	});
};

router.post(
	"/login",
	body("email").isEmail().withMessage("format email salah"),
	body("password")
		.isLength({ min: 3 })
		.withMessage("harus minimal 3 karakter"),
	ControllerLogin.login
);

router.post(
	"/register",
	body("email").isEmail().withMessage("format email salah"),
	body("email").custom(isValidUser),
	body("password")
		.isLength({ min: 3 })
		.withMessage("harus minimal 3 karakter"),
	ControllerLogin.register
);

router.get("/daftar", Auth.checkToken, Controller.showData);

router.post("/buat", Auth.checkToken, Controller.createData);

router.post("/ubah", Auth.checkToken, Controller.updateData);

router.post("/hapus", Auth.checkToken, Controller.deleteData);

module.exports = router;
