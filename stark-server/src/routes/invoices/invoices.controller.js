const {
    issueTransfer
} = require('../../models/transfers.model');

/*
*   handles POST /webhook/invoices
*   event.subscription = "invoice",
*   event.log.type = "created" || "paid" || "credited"
*/
async function hookInvoices(req, res) {
    console.log("\n******Invoices Hook******\n");
    console.log(`req body: ${JSON.stringify(req.body)}`);
    const invoice = req.body;
    // check event log type "credited"
    switch (invoice["event"]["log"]["type"]) {
        case "created":
            console.log("created.");
            break;
        case "paid":
            console.log("paid.");
            break;
        case "credited":
            console.log("credited => make transfer");
            await issueTransfer(invoice["event"]["log"].invoice);
            break;
        case "voided":
            console.log("voided. why? what to do?"); //@TODO: ask StarkBank developers
            break;
        case "canceled":
            console.log("canceled. need to re-create?"); //@TODO: ask StarkBank developers
            break;
        default:
            console.log("hookInvoice Default case");
    }
    return res.status(200).json({"status": "OK - Invoices Event Webhook received."});
}


module.exports = {
    hookInvoices
}