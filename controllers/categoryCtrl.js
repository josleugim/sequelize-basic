'use strict';
const { findAll, create } = require('../respositories/categoryRepository');

const findAllCtrl = async (req, res) => {
    const data = await findAll()
        .catch(err => res.status(500).json({ success: false, error: err }))

    res.status(200).json({ success: true, data: data });
};

const createCtrl = async (req, res) => {
    const category = {};

    if (req.body.name) {
        category.name = req.body.name;
    }

    const response = await create(category);
    res.status(201).json({ success: true, data: response });
};

module.exports = {
    findAllCtrl,
    createCtrl
}
