'use strict';
const conceptCtrl = require('../controllers/conceptCtrl');

module.exports = app => {
    app.get('/concept', conceptCtrl.findAll);
    app.post('/concept', conceptCtrl.create);
}