const { Router } = require('express');
const router = Router();
const { Transaction } = require('../db');
module.exports = router.get('/:transactionId', function(req, res, next) {
    /* console.log('PARAMS: ', req.params); */
    Transaction.findByPk(req.params.transactionId)
        .then(detail => detail ? res.json(detail) : res.sendStatus(404))
        .catch(err => next(err));
});