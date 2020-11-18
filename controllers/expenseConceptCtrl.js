'use strict';

const { findAll } = require('../respositories/expenseConceptRepository');

const findAllCtrl = async (req, res) => {
    let data = await findAll()
        .catch(err => res.status(500).json({ success: false, error: err }));

    res.status(200).json({ success: true, data: data })
};

module.exports = {
    findAllCtrl
};