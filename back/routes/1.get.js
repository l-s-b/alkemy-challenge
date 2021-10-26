const { Router } = require('express');
const router = Router();
const { Balance, Transaction } = require('../db');

// GET BALANCE
router.get('/main', async (_req, res, next) => {
    try {
        const balance = await Balance.findAll({
            include: [{
                model: Transaction,
                as: 'transactions',
                attributes: ["type", "amount", "item", "category"]
            },],
    });
        return res.json(balance[0]);
    } catch(e) { next(e) }
});

// GET ALL TRANSACTIONS
router.get('/transactions', function(_req, res, next) {
    Transaction.findAll()
        .then(results => res.json(results))
        .catch(err => next(err));
});

// GET TRANSACTION BY ID
router.get('/transaction/:transactionId', function(req, res, next) {
    /* console.log('PARAMS: ', req.params); */
    Transaction.findByPk(req.params.transactionId)
        .then(detail => detail ? res.json(detail) : res.sendStatus(404))
        .catch(err => next(err));
});

module.exports = router;