const starkbank = require('starkbank');

exports.project = new starkbank.Project(
    {
        environment: 'sandbox',
        id: process.env.SANDBOX_PROJECT_ID,
        privateKey: process.env.SANDBOX_PRIVATE_KEY // '-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIMCwW74H6egQkTiz87WDvLNm7fK/cA+ctA2vg/bbHx3woAcGBSuBBAAK\noUQDQgAE0iaeEHEgr3oTbCfh8U2L+r7zoaeOX964xaAnND5jATGpD/tHec6Oe9U1\nIF16ZoTVt1FzZ8WkYQ3XomRD4HS13A==\n-----END EC PRIVATE KEY-----'
    }
);
