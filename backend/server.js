const app = require('./app')
const http = require('http');
const connectDb = require('./Database/db');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);



connectDb();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})