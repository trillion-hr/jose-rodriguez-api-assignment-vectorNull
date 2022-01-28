const IPCIDR = require('ip-cidr');
const ipAddresses = require("../models/ipAddresses.model")

function getIpAddresses (req, res) {
    res.json(ipAddresses);
}

function createIpAddresses (req, res) {
    const cidrAddress = req.body.address;
    if (!cidrAddress) {
        return res.status(400).json({
            error: 'Missing CIDR address'
        })
    }
    
    
    
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

