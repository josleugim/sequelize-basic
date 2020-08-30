'use strict';
const Sequelize = require('sequelize');
const moment = require('moment-timezone');

module.exports = connection => {
    return connection.define('Expense', {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        amount: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false,
            isFloat: true,
            min: 1
        },
        note: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        updatedAtFormat: {
            type: Sequelize.VIRTUAL,
            get() {
                return moment(this.updatedAt).tz('America/Mexico_City').locale('es').format('LL')
            }
        }
    });
}