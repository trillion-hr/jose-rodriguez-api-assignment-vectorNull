const mongoose = require('mongoose');

const ipAddressesSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ipAddress', ipAddressesSchema);