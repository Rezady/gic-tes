const db = require("../model");
const Kontak = db.kontak;
const config = require('../config/db.config')
const Redis = require("ioredis");
const redis = new Redis(config.redis);
const { Op } = require("sequelize");

// menampilkan data dengan role admin
async function showData(req, res, next) {
    
    try{
      const {limit, page, search} = req.query
      var kontakDb;

      if(req.user.role === 'admin'){ 
        // getAll or pagination or search    
        kontakDb = await Kontak.findAll({
          limit: limit ? parseInt(limit) : Number.MAX_SAFE_INTEGER + 1,
          offset: limit && page ? (parseInt(page) - 1) * parseInt(limit) : 0,
          where: search && {
            [Op.or] : [
              {nama: search},
              {noHp: search},
              {email: search}
            ]
          }
        })  
      }else if(req.user.role === 'user'){
        // getAll or pagination or search    
        kontakDb = await Kontak.findAll({
          limit: limit ? parseInt(limit) : Number.MAX_SAFE_INTEGER + 1,
          offset: limit && page ? (parseInt(page) - 1) * parseInt(limit) : 0,
          where: {
            userId: req.user.id      
          }
        })
      }
      const dataKontak = kontakDb
      redis.set('redisKontak', {dataKontak:'aaa'})
      res.status(200).json({
        success: true,
        message: "data berhasil didapatkan",
        data: dataKontak,
      })
      
       
    }catch(err){
      res.status(500).send({
        success: false,
        message: err.message || "data tidak berhasil didapatkan.",
      });
    }
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
    email: req.body.email
  };

  Kontak.create(kontak)
    .then((result) => {
      result.update({...kontak, userId:parseInt(req.user.id)})
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
    role: req.body.role
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
