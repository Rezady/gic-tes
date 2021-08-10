const db = require("../model");
const User = db.user;
const jwt = require('jsonwebtoken')
const env = require('../config/env.ts')
import { Request, Response, NextFunction } from 'express';

class ControllerLogin {
  static login(req:Request, res:Response, next:NextFunction) {
  
    const namaReq:string = req.body.nama
    const passwordReq:string = req.body.password
    User.findOne({
      where:{
        nama: namaReq
      }
    }).then((user: { dataValues: { password: string; }; }) => {
      if(user.dataValues.password === passwordReq){
        const userData = user.dataValues
        console.log('login berhasil, ', userData)
        var token:any = jwt.sign({ userData }, env.jwtSecret, {
            expiresIn: 86400 // 1 day
        }); 
        
        res.status(200).json({
            success: true,
            message: "berhasil login",
            data: user,
            token:token,            
        })
      }

    }).catch((err: Error) => {
      console.log(err)
    })
  
  }

  static register(req:Request, res:Response, next:NextFunction){

      const namaReq:string = req.body.nama
      const passwordReq:string = req.body.password

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
        .then(() => {
        res.status(200).json({
            success: true,
            message: "data berhasil diinput",
        });
        })
        .catch((err: { errors: { message: any; }[]; message: any; }) => {
        console.log("err1 ", err.errors[0].message);
        res.status(500).json({
            success: false,
            message: err.errors[0].message || err.message || "data gagal diinput",
        });
        });

  }

}

module.exports = ControllerLogin;