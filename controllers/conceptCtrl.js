'use strict';
const { findAll, create } = require('../respositories/conceptRespository');

const findAllCtrl = async (req, res) => {
    const data = await findAll();

    res.status(200).json({ success: true, data: data })
}

const createCtrl = async (req, res) => {
    const concept = {};
    if (req.body.categoryId) {
        concept.CategoryUuid = req.body.categoryId
    }
    if (req.body.name) {
        concept.name = req.body.name
    }

    if (req.body.description) {
        concept.description = req.body.description
    }

    const response = await create(concept)

    res.status(201).json({ success: true, data: response })
};

module.exports = {
    findAllCtrl,
    createCtrl
}