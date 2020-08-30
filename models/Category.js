'use strict';
const Sequelize = require('sequelize');

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
        }
    })
}