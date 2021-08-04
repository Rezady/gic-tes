// const User = require('./user')

// model table kontak
module.exports = (sequelize, Sequelize) => {
  
  // mendefinisikan constraint dan type atribut tabel kontak
  const Kontak = sequelize.define("kontak", {
    nama: {
      type: Sequelize.STRING,
      unique: true,
    },
    noHp: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      // validasi input email selain tipe string email
      validate: {
        isEmail: {
          args: true,
          msg: "format email tidak benar",
        },
      },
      unique: true,
    },
    
  });

  // Kontak.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });


  return Kontak;
};
