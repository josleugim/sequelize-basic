'use strict';
const { findAll, create } = require('../respositories/expenseRepository');

const findAllCtrl = async (req, res) => {
    const data = await findAll()
        .catch(err => res.status(500).json({ success: false, error: err }))

    res.status(200).json({ success: true, data: data })
};

const createCtrl = async (req, res) => {
    const expense = {};

    if (req.body.amount) {
        expense.amount = req.body.amount
    }

    if (req.body.conceptId) {
        expense.ConceptUuid = req.body.conceptId
    }

    if (req.body.note) {
        expense.note = req.body.note
    }

    const response = await create(expense);

    res.status(201).json({ success: true, data: response })
};

module.exports = {
    findAllCtrl,
    createCtrl
}