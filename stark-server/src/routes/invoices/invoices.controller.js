/*
*   handles /POST /webhook/invoices
*   event.subscription = "invoice",
*   event.log.type = "created" || "paid" || "credited"
*/
async function hookInvoices(req, res) {
    const invoice = req.body;
    // check event log type "credited"
    switch (invoice["event"]["log"]["type"]) {
        case "created":
            console.log("created. Dope!");
            break;
        case "paid":
            console.log("paid. Yay!");
            break;
        case "credited":
            console.log("credited - make transfer");
            // emit transfer event
            break;
        default:
            console.log("none");
    }
    return res.status(200).json({"status": "OK - Invoices Event Webhook received."});
}


module.exports = {
    hookInvoices
}