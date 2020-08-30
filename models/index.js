const Sequelize = require('sequelize');

const connection = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    });

const db = {};

db.connection = connection;
const Concept = require('./Concept')(connection);
const Expense = require('./Expense')(connection);
const Category = require('./Category')(connection);

Concept.hasMany(Expense, { as: 'expenses' });
Expense.belongsTo(Concept, {
    foreignKey: 'ConceptUuid',
    as: 'conceptId'
});
Category.hasMany(Concept, { as: 'categories' });
Concept.belongsTo(Category, {
    foreignKey: 'CategoryUuid',
    as: 'categoryId'
});

db.concepts = Concept;
db.expenses = Expense;
db.categories = Category;

module.exports = db;