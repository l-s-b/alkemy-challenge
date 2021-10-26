const express = require('express');
const app = express();
const routes = require('./routes/0.index.js');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', routes);

// Error catching endware.
app.use((err, _req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || err;
     console.error(err);
    res.status(status).send(message);
  });

module.exports = app;