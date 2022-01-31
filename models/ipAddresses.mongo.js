const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ipAddressesSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('IpAddress', ipAddressesSchema);