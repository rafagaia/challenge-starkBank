const { issueRandomInvoices } = require('../models/invoices.model');


async function emitInvoice() {
    console.log(`Invoices being emitted...\n${Date.now()}\n`);
    await issueRandomInvoices();
}

async function scheduleEmitInvoices() {
    const initialDelay = 5 * 1000;
    const interval = 3 * 60 * 60 * 1000; // 3 hours in miliseconds
    const duration = 24 * 60 * 60 * 1000; // 24 hours in miliseconds

    const startTime = Date.now();

    console.log("Invoice Scheduler Starting...");
    async function run() {
        const elapsedTime  = Date.now() - startTime;
        if (elapsedTime < duration) {
            await emitInvoice();
            // Schedule the next run after the interval
            setTimeout(run, interval);
        } else {
            console.log(`\n*****Invoices Completed - for a total duration of: ${duration}******\n`);
        }
    }
    setTimeout(run, initialDelay);
}

module.exports = {
    scheduleEmitInvoices
}