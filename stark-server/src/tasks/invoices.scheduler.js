const { issueRandomInvoices } = require('../models/invoices.model');


async function emitInvoice() {
    console.log('Invoice Emitter...');
    await issueRandomInvoices();
}

async function scheduleEmitInvoices() {
    const initialDelay = 5 * 1000;
    const interval = 3 * 60 * 60 * 1000; // 3 hours in miliseconds
    const duration = 24 * 60 * 60 * 1000; // 24 hours in miliseconds

    const startTime = Date.now();

    async function run() {
        console.log("Invoice Scheduler Starting...");
        const elapsedTime  = Date.now() - startTime;
        if (elapsedTime < duration) {
            await emitInvoice();
            // Schedule the next run after the interval
            setTimeout(run, interval);
        }
    }
    setTimeout(run, initialDelay);
}

module.exports = {
    scheduleEmitInvoices
}