'use strict';

const bodyParser = require('body-parser');
const cors = require("cors");

module.exports = (app) => {
    const corsOptions = {
        origin: "http://localhost:8081"
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};