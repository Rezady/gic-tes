module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        nama: {
            type: Sequelize.STRING,
            unique: true,
          },
        password: {
            type: Sequelize.STRING,
          },
        token: {
            type: Sequelize.STRING,
        },
        role:{
          type: Sequelize.STRING,
          validate: {
              isIn: [['user', 'admin']],
          }
        }
    })
    
    return User
}