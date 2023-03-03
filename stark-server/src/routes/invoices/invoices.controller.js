async function httpIssueInvoice(req, res) {
    return res.status(200).json({"invoice": "success"});
}


module.exports = {
    httpIssueInvoice
}