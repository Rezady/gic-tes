var jwt = require('jsonwebtoken')
const env = require('../config/env.js')

class Auth {
    static checkToken(req, res, next) {
        console.log('auth')
        let token = req.header('Authorization').replace('Bearer ', '')
        console.log('token ', token)

        if(!token){
            res.status(404).json({
                success:false,
                message:"harus login dahulu"
            })
        } 

        jwt.verify(token, env.jwtSecret, (err, userJwt) => {
            console.log('verify')
            req.user = userJwt.userData
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