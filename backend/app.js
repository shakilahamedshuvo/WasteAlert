const dotenv = require('dotenv');
dotenv.config();
const cors  = require('cors');
const express  = require('express');

const userRoutes = require('./Routes/user.route');

const app= express();
app.use(express.json());
app.use(cors({ origin: '*' }));
app.get('/', (req, res) => {
   res.send('Waste Alert Backend is running');
})

app.use('/user', userRoutes);

module.exports = app;


