const dotenv = require('dotenv');
dotenv.config();
const cors  = require('cors');
const express  = require('express');
const authRoutes = require('./Routes/auth.routes');

const userRoutes = require('./Routes/user.route');


const app= express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
   res.send('Waste Alert Backend is running');
})
app.use('/api/auth', authRoutes);

app.use('/user', userRoutes);

module.exports = app;


