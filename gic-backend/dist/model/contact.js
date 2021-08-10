"use strict";
class Contact {
    constructor(sequelize, Sequelize) {
        this.sequelize = sequelize;
        this.Sequelize = Sequelize;
    }
    getContact() {
        const Contact = this.sequelize.define("kontak", {
            nama: {
                type: this.Sequelize.STRING,
                unique: true,
            },
            noHp: {
                type: this.Sequelize.STRING,
            },
            email: {
                type: this.Sequelize.STRING,
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
        return Contact;
    }
}
module.exports = Contact;
