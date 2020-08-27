const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, '', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.connection = connection;
db.concepts = require('./Concept')(connection)

module.exports = db;