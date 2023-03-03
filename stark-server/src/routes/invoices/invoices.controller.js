async function httpIssueInvoice(req, res) {
    return res.status(202).json({"invoice": "success"});
}


module.exports = {
    httpIssueInvoice
}