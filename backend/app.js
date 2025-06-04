const dotenv = require('dotenv');
dotenv.config();

const express  = require('express');
const app= express();

app.get('/', (req, res) => {
    res.send('Waste Alert Backend is running');
})


module.exports = app;


