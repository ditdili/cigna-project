const express = require('express');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./errorHandler');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

module.exports = app;
