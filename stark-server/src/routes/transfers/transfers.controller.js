/*
*   handles POST /webhook/transfers
*/
async function hookTransfers(req, res) {
    console.log("******Transfers Hook******");
    return res.status(200).json({"status": "OK - Transfers Event Webhook received."})
}

module.exports = {
    hookTransfers
}