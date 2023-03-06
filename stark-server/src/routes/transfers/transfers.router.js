const express = require('express');
const {
    hookTransfers
} = require('./transfers.controller');

const transfersRouter = express.Router();

transfersRouter.post('/', hookTransfers);


module.exports = transfersRouter;