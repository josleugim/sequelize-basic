'use strict';
const db = require('../models/index');
const Expense = db.expenses;
const Concept = db.concepts;
const Category = db.categories;

const findAll = () => {
    return Expense
        .findAll({
            include: [{
                model: Concept,
                as: 'conceptId',
                attributes: ['name'],
                include: {
                    model: Category,
                    as: 'categoryId',
                    attributes: ['name']
                }
            }]
        })
        .then(data => data)
        .catch(err => {
            console.log(err)
            return err
        })
};

const create = (expense) => {
    return Expense
        .create(expense)
        .then(data => data)
        .catch(err => err)
}

module.exports = {
    findAll,
    create
}