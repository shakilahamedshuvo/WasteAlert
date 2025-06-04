const mongoose  = require('mongoose');

 function  connectDb () {
    mongoose.connect(process.env.DB_URL,{})
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1); 
    })
}

module.exports = connectDb;