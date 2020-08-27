'use strict';
const db = require('../models/index');
const Concept = db.concepts;

const findAll = () => {
    return Concept
        .findAll()
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