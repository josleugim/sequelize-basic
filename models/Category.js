'use strict';
const Sequelize = require('sequelize');
const moment = require('moment-timezone');

module.exports = connection => {
    return connection.define('Category', {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                len: [3, 50]
            }
        },
        updatedAtFormat: {
            type: Sequelize.VIRTUAL,
            get() {
                return moment(this.updatedAt).tz('America/Mexico_City').locale('es').format('LL')
            }
        }
    })
}
