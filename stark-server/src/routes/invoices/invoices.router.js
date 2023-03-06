const express = require('express');
const {
    hookInvoices
} = require('./invoices.controller');

const invoicesRouter = express.Router();

invoicesRouter.post('/', hookInvoices);


module.exports = invoicesRouter;