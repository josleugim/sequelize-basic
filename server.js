'use strict';
const express = require('express');

require('dotenv').config();

const app = express();
require('./config/express')(app);
const PORT = 8001;

require('./routes/concept')(app);

const db = require('./models/index');
db.connection
    .sync({
        logging: console.log
    })
    .then(() => console.log('Connection to database established'))
    .catch(err => console.error(`Unable to connect to the database: ${err}`))

app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`)
})