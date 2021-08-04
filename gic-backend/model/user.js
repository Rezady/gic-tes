// const Kontak = require('./kontak')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        nama: {
            type: Sequelize.STRING,
            unique: true,
          },
        password: {
            type: Sequelize.STRING,
          },
    })
    // User.hasMany(Kontak);
    return User
}