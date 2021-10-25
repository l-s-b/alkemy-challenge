const express = require('express');
const app = express();
const routes = require('./routes/0.index.js');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', routes);

module.exports = app;