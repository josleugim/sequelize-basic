'use strict';
const db = require('../models/index');
const Category = db.categories;

const findAll = () => {
    return Category
        .findAll()
        .then(data => data)
        .catch(err => err)
};

const create = (category) => {
    return Category
        .create(category)
        .then(data => data)
        .catch(err => err)
};

module.exports = {
    findAll,
    create,
};