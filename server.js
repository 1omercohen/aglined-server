const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/aligned', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
require("./models");
const router = require("./routes")
const server = express()

server.use(cors())
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use('/users', router)

server.listen(9000, () => console.log("Server is running on port 9000"))