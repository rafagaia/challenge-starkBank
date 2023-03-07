const starkbank = require('starkbank');

exports.project = new starkbank.Project(
    {
        environment: 'sandbox',
        id: process.env.SANDBOX_PROJECT_ID,
        privateKey: process.env.SANDBOX_PRIVATE_KEY
    }
);
