var express = require("express");
var router = express.Router();
var ctr = require("../controller/controller");
var ctrLogin = require("../controller/controllerLogin");
var auth = require('../middleware/auth');

router.post("/login", ctrLogin.login);

router.post("/logout", ctrLogin.logout);

router.post("/register", ctrLogin.register);

router.get("/daftar",auth ,ctr.showData);

router.post("/buat", auth, ctr.createData);

router.post("/ubah", auth, ctr.updateData);

router.post("/hapus", auth, ctr.deleteData);

module.exports = router;
