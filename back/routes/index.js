const { Router } = require('express');
const router = Router();
const axios = require('axios');

// getAll
const { Transaction } = require('../db');
router.get('/', function(_req, res, next) {
    Transaction.findAll()
        .then(results => res.json(results))
        .catch(err => next(err));
});

// getDetail
/* const { Transactions } = require('../db'); */
router.get('/:transactionId', function(req, res, next) {
    console.log('PARAMS: ', req.params);
    Transaction.findByPk(req.params.transactionId)
        .then(detail => detail ? res.json(detail) : res.sendStatus(404))
        .catch(err => next(err));
});

module.exports = router;