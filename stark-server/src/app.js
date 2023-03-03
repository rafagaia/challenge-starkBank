const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const api = require('./routes/api')

const app = express();

app.use(helmet());

// Allow BASE URL - Sandbox
app.use(cors({
    origin: [
        'https://localhost:4242',
        'https://sandbox.api.starkbank.com'
    ],
}));

/*
* StarkBank API Reference states that
*   the API speaks exclusively in JSON.
* reference: (https://starkbank.com/docs/api#introduction)
*/ 
app.use(express.json());

app.use('/webhook', api);


module.exports = app;


