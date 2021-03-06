var express = require("express");
var router = express.Router();
var Controller = require("../controller/controller");
var ControllerLogin = require("../controller/controllerLogin");
var Auth = require('../middleware/auth');

router.post("/login", ControllerLogin.login);

router.post("/register", ControllerLogin.register);

router.get("/daftar", Auth.checkToken ,Controller.showData);

router.post("/buat", Auth.checkToken, Controller.createData);

router.post("/ubah", Auth.checkToken, Controller.updateData);

router.post("/hapus", Auth.checkToken, Controller.deleteData);

module.exports = router;
