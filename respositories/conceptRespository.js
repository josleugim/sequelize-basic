'use strict';
const db = require('../models/index');
const Concept = db.concepts;
const Category = db.categories;

const findAll = () => {
    return Concept
        .findAll({
            include: [{
                model: Category,
                as: 'categoryId'
            }]
        })
        .then(data => data)
        .catch(err => err)
}

const create = (concept) => {
    return Concept
        .create(concept)
        .then(data => data)
        .catch(err => err)
}

module.exports = {
    create,
    findAll
}