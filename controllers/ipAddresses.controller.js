const IPCIDR = require('ip-cidr');
const ipAddresses = require("../models/ipAddresses.model");

function getIpAddresses (req, res) {
    res.json(ipAddresses);
}

function createIpAddresses (req, res) {
  
    const cidrAddress = req.body.address;
 
    if (cidrAddress === '') {
        return res.status(400).json({
            error: 'Missing CIDR address',
            message: 'Please include enter a CIDR address.'
        })
    }

    if(!IPCIDR.isValidAddress(cidrAddress)) {
        return res.status(400).json({
            error: 'Invalid CIDR address',
            message: 'CIDR address is in the wrong format.'
        })
    }

    
    const cidr = new IPCIDR(cidrAddress);
    const addressArray = cidr.toArray();

    // CHECK FOR DUPLICATES

    for (let i = 0; i < addressArray.length; i++) {
        const result = {};
        result[i] = {
            address: addressArray[i],
            status: "available"
        }
        ipAddresses.push(result[i]);
    }
    res.send(ipAddresses);
    
}

function aquireIpAddresses (req, res) {
    
    const ipAddress = req.body.address;


    for(let i = 0; i < ipAddresses.length; i++) {

        if (ipAddresses[i].address == ipAddress) {
            ipAddresses[i].status = "aquired";
            
            return res.status(200).json({
                message: `IP address ${ipAddress} has been aquired.`,
        })
        } else {
            return res.status(400).json({
                message: "IP address not found. Please enter another address."
            })
        }      
    }
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

