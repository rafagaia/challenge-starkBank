const express = require('express');


const invoicesRouter = require('./invoices/invoices.router');
const transfersRouter = require('./transfers/transfers.router');

const api = express.Router();

api.use('/invoices', invoicesRouter);
api.use('/transfers', transfersRouter);

module.exports = api;