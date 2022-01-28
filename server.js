const express = require('express');
const path = require('path');

const ipAddressRouter = require('./routes/ipAddresses.router')

const app = express();

const PORT = process.env.PORT;

app.use('/api/v1/', ipAddressRouter);


app.listen(PORT, () => {
    console.log(`Server started. Listening on port ${PORT}`)
} )
