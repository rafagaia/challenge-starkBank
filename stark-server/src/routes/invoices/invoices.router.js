const express = require('express');
const {
    httpIssueInvoice
} = require('./invoices.controller');

const invoicesRouter = express.Router();

invoicesRouter.post('/', httpIssueInvoice);


module.exports = invoicesRouter;