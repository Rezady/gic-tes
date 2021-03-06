// konfigurasi koneksi database

const config = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "kontak",
  dialect: "mysql",
};

const redisConfig = {
  port: 6379, // Redis port
  host: "127.0.0.1", // Redis host
  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: "auth",
  db: 0,
}

module.exports = { mysql:config, redis:redisConfig};
