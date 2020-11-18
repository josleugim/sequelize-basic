'use strict';
const {findAllCtrl, createCtrl, updateCtrl} = require('../controllers/conceptCtrl');

module.exports = app => {
    app.get('/concept', findAllCtrl);
    app.post('/concept', createCtrl);
    app.put('/concept', updateCtrl)
};