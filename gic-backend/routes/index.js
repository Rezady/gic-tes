var express = require("express");
var router = express.Router();
var ctr = require("../controller/controller");

router.get("/daftar", ctr.showData);

router.post("/buat", ctr.createData);

router.post("/ubah", ctr.updateData);

router.post("/hapus", ctr.deleteData);

module.exports = router;
