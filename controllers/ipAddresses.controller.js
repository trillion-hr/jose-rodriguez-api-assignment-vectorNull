const IPCIDR = require('ip-cidr');
const IpAddress = require('../models/ipAddresses.mongo');

module.exports = {
    getIpAddresses,
    createIpAddresses,
    acquireIpAddress,
    releaseIpAddress,
}

async function getIpAddresses (req, res) {

    const ipAddresses = await IpAddress.find({});
    res.status(200).json(ipAddresses);
}

async function createIpAddresses (req, res) {

    const cidrAddress = req.body.address;
 
    if (cidrAddress === '') {
        return res.status(400).json({
            error: 'Missing CIDR address',
            message: 'Please enter a CIDR address.'
        })
    }

    if(!IPCIDR.isValidAddress(cidrAddress)) {
        return res.status(400).json({
            error: 'Invalid CIDR address',
            message: 'CIDR address is in the wrong format.'
        })
    }

    const cidr = new IPCIDR(cidrAddress);
    addressArray = cidr.toArray();

    for (let i = 0; i < addressArray.length; i++) {
        
        const existingIpAddress = await IpAddress.findOne({ address: addressArray[i]})
        if(existingIpAddress) {
            return res.status(400).json('This IP address already exists.')
        }
        const ipaddress = new IpAddress();
        ipaddress.address = addressArray[i];
        ipaddress.status = 'available';
        await ipaddress.save();
    }
    res.status(200).json(`Successfully created ${addressArray.length} ip addresses.`)
}

async function acquireIpAddress (req, res) {
    
    const ipAddress = req.body.address;
    
    const addressToUpdate = await IpAddress.findOne({ address: ipAddress });

    checkForIpAddress(addressToUpdate, res);

    if(addressToUpdate && addressToUpdate.status === 'available') {
        addressToUpdate.status = 'acquired';
        const updatedAddress = await addressToUpdate.save();
        res.status(200).json({
            message: `IP address ${updatedAddress.address} has been acquired.`
        })
    } else {
        res.status(400).json({
            error: 'Address already acquired.',
            message: `IP address ${addressToUpdate.address} has already been acquired. Please choose another IP address.`
        })
    }
}

async function releaseIpAddress (req, res) {
    
    const ipAddress = req.body.address;
    
    const addressToUpdate = await IpAddress.findOne({ address: ipAddress });
    
    checkForIpAddress(addressToUpdate, res);

    if(addressToUpdate && addressToUpdate.status === 'acquired') {
        addressToUpdate.status = 'available';
        const updatedAddress = await addressToUpdate.save();
        res.status(200).json({
            message: `IP address ${updatedAddress.address} has been released.`
        })
    } else {
        res.status(400).json({
            error: 'Address already released.',
            message: `IP address ${addressToUpdate.address} has already been released. Please choose another address.`
        })
    }
}

function checkForIpAddress(addressToUpdate, res) {
    
    if(!addressToUpdate) {
        return res.status(400).json({
            error: 'Address does not exist.',
            message: 'The address to be updated does not exist in database.'
        })
    }
}



