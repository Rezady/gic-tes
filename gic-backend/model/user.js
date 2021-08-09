class User {
  constructor (sequelize, Sequelize){
    this.sequelize = sequelize;
    this.Sequelize = Sequelize;
  }

  getUser() {
    const User = this.sequelize.define("user", {
      nama: {
          type: this.Sequelize.STRING,
          unique: true,
        },
      password: {
          type: this.Sequelize.STRING,
        },
      token: {
          type: this.Sequelize.STRING,
      },
      role:{
        type: this.Sequelize.STRING,
        validate: {
            isIn: [['user', 'admin']],
        }
      }
    })

    return User
  }
}

module.exports = User