const express = require('express');


const invoicesRouter = require('./invoices/invoices.router');

const api = express.Router();

api.use('/invoices', invoicesRouter);
// api.use('/transfer', transfersRouter);

module.exports = api;