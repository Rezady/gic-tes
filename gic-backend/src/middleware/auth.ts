var jwt = require('jsonwebtoken')
const env = require('../config/env.ts')
import {Request, Response, NextFunction} from "express"

declare global {
    namespace Express {
        export interface Request {
           user?: any
        }
     }
  } 

class Auth {
    static checkToken(req:Request , res:Response, next:NextFunction):void {
        console.log('auth')
        let token = req.header('Authorization')?.replace('Bearer ', '') as string
        console.log('token ', typeof token)

        if(!token){
            res.status(404).json({
                success:false,
                message:"harus login dahulu"
            })
        } 

        jwt.verify(token, env.jwtSecret, (err:any, userJwt:any) => {
            console.log('verify');
            req.user= userJwt.userData;
            if (err) {
                return res.status(401).send({
                message: "Unauthorized!"
                });
            } 
        });
        next();
    }
}

module.exports = Auth