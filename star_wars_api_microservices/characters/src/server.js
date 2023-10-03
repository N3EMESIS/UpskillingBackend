const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');

server.use(morgan('dev'));
server.use(express.json());

server.use(router);

module.exports = server;