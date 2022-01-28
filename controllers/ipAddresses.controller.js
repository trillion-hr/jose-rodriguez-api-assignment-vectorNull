const ipAddresses = require("../models/ipAddresses.model")

function getIpAddresses (req, res) {
    res.json(ipAddresses);
}

function createIpAddresses (req, res) {
    console.log('creating new ip');
}

function aquireIpAddresses (req, res) {
    console.log('aquiring ip address');
}

function releaseIpAddresses (req, res) {
    console.log('releasing ip address')
}

module.exports = {
    getIpAddresses,
    createIpAddresses,
    aquireIpAddresses,
    releaseIpAddresses
}

