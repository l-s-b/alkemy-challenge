const { Router } = require('express');
const router = Router();
const { Balance, Transaction } = require('../db');

// GET BALANCE
router.get('/main', async (_req, res, next) => {
    try {
        let inflow = 0; let outflow = 0;
        const balance = await Balance.findAll({
            include: [{
                model: Transaction,
                as: 'transactions',
                attributes: ["type", "amount"]
            },],
    });
    // Update funds:
    balance[0].dataValues.transactions.map( t => {
        if(t.type === "INFLOW") inflow += t.amount
        else if(t.type === "OUTFLOW") outflow += t.amount;
    } );
    const updating = await Balance.update(
        { funds: Math.round((inflow - outflow) * 100)/100 },
        { where: { id: 1 } }
    );

    const updated = await Balance.findAll({ 
        include: [{
            model: Transaction,
            as: 'transactions',
            attributes: ["type", "amount", "item", "category"]
        }],
    })
        return res.json(updated[0]);
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