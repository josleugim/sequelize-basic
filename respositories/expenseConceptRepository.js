'use strict';

const db = require('../models/index');
const Expense = db.expenses;
const Concept = db.concepts;
const Category = db.categories;
const { findByCategory } = require('./expenseRepository');

const findAll = async () => {
    /*const categories = await Category
        .findAll({
            attributes: ['uuid']
        })
        .catch(err => console.error(err));

    categories.map(async category => {
        const categoryCount = await findByCategory(category.uuid);
        console.log(`${category.uuid} - ${categoryCount.count}`)
    });*/

    return Expense
        .findAll({
            include: [{
                model: Concept,
                as: 'conceptId',
                include: {
                    model: Category,
                    as: 'categoryId',
                    where: {
                        name: 'Comida'
                    },
                    required: false
                }
            }]
        })
        .then(data => data)
        .catch(err => err)
};

module.exports = {
    findAll
};