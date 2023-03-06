const starkbank = require('starkbank');
const generateTransfersJson = require('./utils/transfer').generateTransfersJson;

starkbank.user = require('./utils/user').project;


async function issueTransfer(invoice) {
    setTimeout(async function() {
        console.log("\n\nissuing transfer\n\n\n");
        console.log(JSON.stringify(invoice));
        const amount = invoice["amount"]; //@TODO: are eventual fees, feeAmount, fines already deducted? so this amount is total amount to be transferred? Or need to deduct?
        let transfer = generateTransfersJson(1, amount, false);
        transfer = await starkbank.transfer.create(transfer);
        console.log(`Transferred: ${JSON.stringify(transfer)}\n\n`);
    }, 2000);
}

module.exports = {
    issueTransfer
}