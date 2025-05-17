const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');

const app = express();

const dirName = _dirname;
if (process.env.NODE_ENV === 'development') {
    app.use(express.static(`${dirName}/publlic`));

    app.use((req, res, next) => {
        req.requestTime = new Date().toISOString();
        next();
    });
}

// global middleware
// app.get('*', (req, res, next) => {
//     res.status(404).json({
//         status: 'fail',
//         message: `can't find ${req.originalUrl}`
//     })
// })
module.exports = app;
