const db = require("../model");
const User = db.user;
const jwt = require('jsonwebtoken')
const env = require('../config/env.js')

function login(req, res, next){
  
    const namaReq = req.body.nama
    const passwordReq = req.body.password
    User.findOne({
      where:{
        nama: namaReq
      }
    }).then((result) => {
      if(result.dataValues.password === passwordReq){
        console.log('login berhasil')
        var token = jwt.sign({ user_id:result.id  }, env.jwtSecret, {
            expiresIn: 86400 // 24 hours
          }); 
        console.log("token ", token);
        res.status(200).json({
            success: true,
            message: "berhasil login",
            data: result,
            token:token,            
        })
      }

    }).catch((err) => {
      console.log(err)
    })
  
}

function register(req, res, next){

    const namaReq = req.body.nama
    const passwordReq = req.body.password

    // Validasi request
  if (!namaReq || !passwordReq ) {
    res.status(400).json({
      success: false,
      message: "input tidak boleh ada yang kosong",
    });
    return;
  }

  const user = {
    nama: namaReq,
    noHp: passwordReq,
  };

    User.create(user)
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

function logout(){
  
}

module.exports = { login, register, logout }