export default class User {
  sequelize:any;
  Sequelize:any;
  constructor (sequelize:any, Sequelize:any){
    this.sequelize = sequelize;
    this.Sequelize = Sequelize;
  }

  getUser():any {
    const User = this.sequelize.define("user", {
      email: {
          type: this.Sequelize.STRING,
          unique: true,
        },
      password: {
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

// module.exports = User