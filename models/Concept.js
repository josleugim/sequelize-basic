'use strict';
const Sequelize = require('sequelize');

module.exports = connection => {
    return connection.define('Concept', {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            validate: {
                len: [3, 50]
            }
        },
        description: Sequelize.TEXT
    });
}