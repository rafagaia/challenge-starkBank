require('dotenv').config();
const fs = require('fs');
const https = require('https');
const app = require('./app');
const { scheduleEmitInvoice } = require('./tasks/invoice.emitter');


const httpsServer = https.createServer({
    key: fs.readFileSync('secrets/key.pem'),
    cert: fs.readFileSync('secrets/cert.pem')
}, app);

const PORT = process.env.PORT || 4242;

async function startupServer() {
    httpsServer.listen(PORT, () => {
        console.log(`Server Listening on Port: ${PORT}...`);
    });
}

startupServer();
scheduleEmitInvoice();