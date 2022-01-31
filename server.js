// API Docs : https://documenter.getpostman.com/view/7914740/UVeCRTxC

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const ipAddressRouter = require('./routes/ipAddresses.router')

const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;


mongoose.connect(MONGO_URL);
mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready...')
})
mongoose.connection.on('error', (err) => {
    console.error(err);
})

app.use(express.json());
app.use('/api/v1/', ipAddressRouter);


app.listen(PORT, () => {
    console.log(`Server started. Listening on port ${PORT}`)
} )
