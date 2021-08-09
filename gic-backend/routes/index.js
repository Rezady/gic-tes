var express = require("express");
var router = express.Router();
var Controller = require("../controller/controller");
var ControllerLogin = require("../controller/controllerLogin");
var auth = require('../middleware/auth');

router.post("/login", ControllerLogin.login);

router.post("/register", ControllerLogin.register);

router.get("/daftar",auth ,Controller.showData);

router.post("/buat", auth, Controller.createData);

router.post("/ubah", auth, Controller.updateData);

router.post("/hapus", auth, Controller.deleteData);

module.exports = router;
