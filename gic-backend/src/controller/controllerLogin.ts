const db = require("../model");
const User = db.user;
const jwt = require('jsonwebtoken')
const env = require('../config/env.ts')
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import {ObjectUser} from '../interface/interface'

class ControllerLogin {
  static login(req:Request, res:Response, next:NextFunction):void {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
  
    const emailReq:string = req.body.email
    const passwordReq:string = req.body.password
    User.findOne({
      where:{
        email: emailReq
      }
    }).then((user: { dataValues: { password: string; }; }) => {
      if(user.dataValues.password === passwordReq){
        const userData = user.dataValues
        console.log('login berhasil, ', userData)
        var token = jwt.sign({ userData }, env.jwtSecret, {
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

  static register(req:Request, res:Response, next:NextFunction):void{
    
    const errors= validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const emailReq:string = req.body.email
    const passwordReq:string = req.body.password
    const roleReq:string = req.body.role
      // Validasi request
    if (!emailReq || !passwordReq ) {
      res.status(400).json({
        success: false,
        message: "input tidak boleh ada yang kosong",
      });
      return;
    }

    const user:ObjectUser = {
      email: emailReq,
      password: passwordReq,
      role: roleReq
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