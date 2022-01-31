const express = require('express');

const {
    getIpAddresses,
    createIpAddresses,
    acquireIpAddress,
    releaseIpAddress,
        } = require('../controllers/ipAddresses.controller')

const ipAddressRouter = express.Router();

ipAddressRouter.get('/list-ip-addresses', getIpAddresses);
ipAddressRouter.post('/create-new-ip-addresses/', createIpAddresses);
ipAddressRouter.post('/aquire-ip-address/', acquireIpAddress);
ipAddressRouter.post('/release-ip-address/', releaseIpAddress);

module.exports = ipAddressRouter;