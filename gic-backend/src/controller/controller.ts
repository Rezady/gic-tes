const db = require("../model");
const Kontak = db.kontak;
const config = require('../config/db.config')
const Redis = require("ioredis");
const redis = new Redis(config.redis);
const { Op } = require("sequelize");
import {Request, Response, NextFunction} from 'express'
import {QueryRequest, ObjectContact} from '../interface/interface'

declare global {
  namespace Express {
      export interface Request {
         user?: any
      }
   }
} 

class Controller {

  static async showData(req:Request, res:Response, next:NextFunction) {
    try{
      const {limit, page, search}:QueryRequest = req.query;
      var kontakDb:ObjectContact;

      // menampilkan data dengan role admin
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
      } else if(req.user.role === 'user'){
        // getAll or pagination or search    
        kontakDb = await Kontak.findAll({
          limit: limit ? parseInt(limit) : Number.MAX_SAFE_INTEGER + 1,
          offset: limit && page ? (parseInt(page) - 1) * parseInt(limit) : 0,
          where: {
            userId: req.user.id      
          }
        })
      }

      const dataKontak = kontakDb!;
      redis.set('redisKontak', {dataKontak:'aaa'})
      res.status(200).json({
        success: true,
        message: "data berhasil didapatkan",
        data: dataKontak,
      })
      
       
    }catch(err:any){
      res.status(500).send({
        success: false,
        message: err.message || "data tidak berhasil didapatkan.",
      });
    }
}

  // menambah data baru di tabel kontak
  static createData(req:Request, res:Response, next:NextFunction):void {
    // Validasi request
    if (!req.body.nama || !req.body.noHp || !req.body.email) {
      res.status(400).json({
        success: false,
        message: "input tidak boleh ada yang kosong",
      });
      return;
    }

    const kontak:ObjectContact = {
      nama: req.body.nama,
      noHp: req.body.noHp,
      email: req.body.email
    };

    Kontak.create(kontak)
      .then((result: { update: (arg0: { userId: number; nama: string; noHp: string; email: string; }) => void; }) => {
        result.update({...kontak, userId:parseInt(req.user.id)})
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

  // update database
  static updateData(req:Request, res:Response, next:NextFunction):void {
    // Validate request
    if (!req.body.nama || !req.body.noHp || !req.body.email || !req.body.idUser) {
      res.status(400).json({
        success: false,
        message: "input tidak boleh ada yang kosong",
      });
      return;
    }

    

    const updateKontak:ObjectContact = {
      nama: req.body.nama,
      noHp: req.body.noHp,
      email: req.body.email,
      userId: parseInt(req.user.id),
      role: req.body.role
    };
    var id = req.body.id;
    Kontak.update(updateKontak, {
      where: {
        id: id,
      },
    })
      .then(() => {
        res.status(200).json({
          success: true,
          message: "data berhasil diupdate",
        });
      })
      .catch((err: { errors: { message: any; }[]; message: any; }) => {
        res.status(500).json({
          success: false,
          message: err.errors[0].message || err.message || "proses update gagal",
        });
      });
  }

  // Menghapus data di tabel kontak
  static deleteData(req:Request, res:Response, next:NextFunction):void {
    console.log('delete')
    var idParam = parseInt(req.body.id);
    Kontak.destroy({
      where: {
        id: idParam,
      },
    })
      .then(() => {
        res.status(200).json({
          success: true,
          message: "data berhasil dihapus",
        });
      })
      .catch((err: { message: any; }) => {
        res.status(500).json({
          success: false,
          message: err.message || "data gagal dihapus",
        });
      });
  }

}

module.exports = Controller;
