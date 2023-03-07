const express = require('express');
const {
    hookInvoices
} = require('./invoices.controller');

const invoicesRouter = express.Router();


function validateInvoice(req, res, next) {
    if (!req.body["event"] ||
        req.body["event"]["workspaceId"] != process.env.WORKSPACE_ID)
    {
        return res.status(400).json({"error": "Missing expected data."});
    }
    else if (req.body["event"]["subscription"] != "invoice")
    {
        return res.status(405).json({"error": "Invalid event hook subscription."});
    }
    else { next(); }
}


invoicesRouter.post('/', validateInvoice, hookInvoices);


module.exports = invoicesRouter;