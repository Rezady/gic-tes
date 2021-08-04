const db = require("../model");
const Kontak = db.kontak;
const jwt = require('jsonwebtoken')

const config = require('../config/db.config')
const Redis = require("ioredis");
const redis = new Redis(config.redis)

// menampilkan data
async function showData(req, res, next) {
    
    // const result = await redis.get("redisKontak")
    // if(result){
    //   console.log("masuk get")
    //   console.log('result ', result)
    //   res.status(200).json({
    //     success: true,
    //     message: "data berhasil didapatkan",
    //     data: result,
    //   })
    // }else{
      const kontakDb = await Kontak.findAll()
      const dataKontak = kontakDb
      redis.set('redisKontak', {dataKontak:'aaa'})
      res.status(200).json({
        success: true,
        message: "data berhasil didapatkan",
        data: dataKontak,
      })
      console.log('kontakDb', dataKontak)
      
    // } 

    // .catch((err) => {
    //   res.status(500).send({
    //     success: false,
    //     message: err.message || "data tidak berhasil didapatkan.",
    //   });
    // });
  
}

// menambah data baru di tabel kontak
function createData(req, res, next) {
  // Validasi request
  if (!req.body.nama || !req.body.noHp || !req.body.email) {
    res.status(400).json({
      success: false,
      message: "input tidak boleh ada yang kosong",
    });
    return;
  }

  const kontak = {
    nama: req.body.nama,
    noHp: req.body.noHp,
    email: req.body.email,
    // idUser: 
  };

  Kontak.create(kontak)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "data berhasil diinput",
      });
    })
    .catch((err) => {
      console.log("err1 ", err.errors[0].message);
      res.status(500).json({
        success: false,
        message: err.errors[0].message || err.message || "data gagal diinput",
      });
    });
}

// update database
function updateData(req, res, next) {
  // Validate request
  if (!req.body.nama || !req.body.noHp || !req.body.email || !req.body.idUser) {
    res.status(400).json({
      success: false,
      message: "input tidak boleh ada yang kosong",
    });
    return;
  }

  var id = req.body.id;

  const updateKontak = {
    nama: req.body.nama,
    noHp: req.body.noHp,
    email: req.body.email,
    idUser: req.body.idUser,
  };
  Kontak.update(updateKontak, {
    where: {
      id: id,
    },
  })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "data berhasil diupdate",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.errors[0].message || err.message || "proses update gagal",
      });
    });
}

// Menghapus data di tabel kontak
function deleteData(req, res, next) {
  var idParam = req.body.id;
  Kontak.destroy({
    where: {
      id: idParam,
    },
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "data berhasil dihapus",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message || "data gagal dihapus",
      });
    });
}

module.exports = { showData, createData, deleteData, updateData };
