'use strict';
const { findAllCtrl, createCtrl, deleteCtrl } = require('../controllers/expenseCtrl');

module.exports = app => {
    app.get('/expense', findAllCtrl);
    app.post('/expense', createCtrl);
    app.delete('/expense', deleteCtrl);
};