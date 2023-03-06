const starkbank = require('starkbank');
const generateExampleInvoicesJson = require('./utils/invoice').generateExampleInvoicesJson;
const randomInt = require('./utils/random').randomInt;

starkbank.user = require('./utils/user').project;

/*
*   Issues >=8 Invoices <=12 to StarkBank
*/
async function issueRandomInvoices() {
    // generate between [8,12] invoices
    let invoices = generateExampleInvoicesJson(randomInt(8, 12));
    try {
        invoices = await starkbank.invoice.create(invoices);
        return invoices;
    } catch (err) {
        console.error(err);
        return null;
    }
}

/*
*
*/
async function parseReceivedInvoiceEvent(attribute) {
}


module.exports = {
    issueRandomInvoices
}