'use strict';

const { findAllCtrl, createCtrl } = require('../controllers/categoryCtrl');

module.exports = app => {
    app.get('/category', findAllCtrl);
    app.post('/category', createCtrl);
}