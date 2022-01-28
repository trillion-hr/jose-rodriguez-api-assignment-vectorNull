const express = require('express');

const ipAddressController = require('../controllers/ipAddresses.controller')

const ipAddressRouter = express.Router();

ipAddressRouter.get('/list-ip-addresses', ipAddressController.getIpAddresses);
ipAddressRouter.post('/create-new-ip-addresses/:address', ipAddressController.createIpAddresses);
ipAddressRouter.post('/aquire-ip-addresses/:address', ipAddressController.aquireIpAddresses);
ipAddressRouter.post('/release-ip-addresses/:address', ipAddressController.releaseIpAddresses);

module.exports = ipAddressRouter;