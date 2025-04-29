const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(express.static(`${_dirname}/publlic`));

    app.use((req, res, next) => {
        req.requestTime = new Date().toISOString();
        next();
    });
}

module.exports = app;