'use strict';
const express = require('express');

require('dotenv').config();

const app = express();
require('./config/express')(app);
const PORT = process.env.PORT;

require('./routes/concept')(app);
require('./routes/expense')(app);
require('./routes/category')(app);
require('./routes/expenseConcept')(app);

const db = require('./models/index');
db.connection
    .sync({
        logging: console.log,
        alter: true
    })
    .then(() => console.log('Connection to database established'))
    .catch(err => console.error(`Unable to connect to the database: ${err}`));

app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`)
});