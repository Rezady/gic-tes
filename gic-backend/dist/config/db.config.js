"use strict";
// konfigurasi koneksi database
const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "kontak",
    dialect: "mysql",
};
const redisConfig = {
    port: 6379,
    host: "127.0.0.1",
    family: 4,
    password: "auth",
    db: 0,
};
module.exports = { mysql: config, redis: redisConfig };
