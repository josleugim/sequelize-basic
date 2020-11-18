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
                    attributes: ['uuid', 'name']
                }
            }]
        })
        .then(data => data)
        .catch(err => {
            console.log(err);
            return err
        })
};

const create = (expense) => {
    return Expense
        .create(expense)
        .then(data => data)
        .catch(err => err)
};

const destroy = (uuid) => {
    return !!Expense
        .destroy({
            where: {uuid}
        })
        .then(data => data)
        .catch(err => err)
};

const findByCategory = async (uuid) => {
    return await Expense
        .findAndCountAll({
            include: [{
                model: Concept,
                as: 'conceptId',
                attributes: ['name'],
                include: {
                    model: Category,
                    as: 'categoryId',
                    attributes: ['name'],
                    where: {
                        uuid: uuid
                    },
                    required: false
                }
            }]
        })
        .then(data => data)
        .catch(err => console.error(err));
};

module.exports = {
    findAll,
    create,
    destroy,
    findByCategory
};