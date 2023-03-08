const starkbank = require('starkbank');
const generateTransfersJson = require('./utils/transfer').generateTransfersJson;

starkbank.user = require('./utils/user').project;


async function issueTransfer(invoice) {
    setTimeout(async function() {
        // console.log(`\nissuing transfer:\n${JSON.stringify(invoice)}`);

        /*
        * @TODO: are eventual fees, feeAmount, fines already deducted? so this amount is total amount 
        *        to be transferred? Or need to subtract?
        */
        const amount = invoice["amount"];
        let transfer = generateTransfersJson(1, amount);
        transfer = await starkbank.transfer.create(transfer);
        // console.log(`Transfer: ${JSON.stringify(transfer)}\n`);
    }, 2000);
}

module.exports = {
    issueTransfer
}