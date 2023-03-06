const starkbank = require('starkbank');
const random = require('./random.js');
const uniqueId = require('./uniqueId.js').uniqueId;

/*
a. bank code: 20018183 
b. branch: 0001 
c. account: 6341320293482496 
d. name: Stark Bank S.A. 
e. tax ID: 20.018.183/0001-80 
f. account type: payment 
*/


let choice = function (a, b) {
    let rand = random.randomInt(0,1);
    if (rand == 0) {
        return a;
    }
    return b;
}


exports.generateTransfersJson = function (n, amount = null, tomorrow = false) {
    
    let exampleTransfer = {
        amount: amount,
        name: 'Stark Bank S.A.', //OK
        taxId: '20.018.183/0001-80', //OK
        bankCode: '20018183', //OK
        branchCode: '0001', //OK
        accountNumber: '6341320293482496', //OK
        accountType: 'payment', //OK
        description: choice(null, 'Rafa\'s Backend Challenge.'),
        rules: [
            new starkbank.transfer.Rule({
                key: 'resendingLimit', 
                value: 5
            }),
        ]
    };

    let transfers = [];
    
    transfers.push(new starkbank.Transfer(exampleTransfer));

    return transfers;
};
