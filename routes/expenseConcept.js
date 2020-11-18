'use strict';

const { findAllCtrl } = require('../controllers/expenseConceptCtrl');

module.exports = app => {
    app.get('/expense-concept', findAllCtrl);
};