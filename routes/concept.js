'use strict';
const {findAllCtrl, createCtrl} = require('../controllers/conceptCtrl');

module.exports = app => {
    app.get('/concept', findAllCtrl);
    app.post('/concept', createCtrl);
}