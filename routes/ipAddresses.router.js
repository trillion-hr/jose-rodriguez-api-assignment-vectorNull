const express = require('express');

const {
    getIpAddresses,
    createIpAddresses,
    aquireIpAddresses,
    releaseIpAddresses
        } = require('../controllers/ipAddresses.controller')

const ipAddressRouter = express.Router();

ipAddressRouter.get('/list-ip-addresses', getIpAddresses);
ipAddressRouter.post('/create-new-ip-addresses/', createIpAddresses);
ipAddressRouter.post('/aquire-ip-address/', aquireIpAddresses);
ipAddressRouter.post('/release-ip-address/', releaseIpAddresses);

module.exports = ipAddressRouter;