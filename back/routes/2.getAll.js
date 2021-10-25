const { Router } = require('express');
const router = Router();

const { Transaction } = require('../db');
module.exports = router.get('/', function(_req, res, next) {
    Transaction.findAll()
        .then(results => res.json(results))
        .catch(err => next(err));
});