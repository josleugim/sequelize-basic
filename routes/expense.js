'use strict';
const { findAllCtrl, createCtrl } = require('../controllers/expenseCtrl');

module.exports = app => {
    app.get('/expense', findAllCtrl);
    app.post('/expense', createCtrl);
}