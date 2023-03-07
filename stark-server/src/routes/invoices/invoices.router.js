const express = require('express');
const {
    hookInvoices
} = require('./invoices.controller');

const invoicesRouter = express.Router();


function validateInvoice(req, res, next) {
    if (req.body["event"]["workspaceId"] == process.env.WORKSPACE_ID) {
        next();
    } else {
        return res.status(406).json({"error": "wrong WorkspaceId."});
    }
}


invoicesRouter.post('/', validateInvoice, hookInvoices);


module.exports = invoicesRouter;