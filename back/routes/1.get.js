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
                attributes: ["type", "amount", "item", "category"]
            },],
    });
    // Update funds:
    balance[0].dataValues.transactions.map( t => 
    {
        console.log("T TYPE: ", t.type);
        console.log("T AMOUNT: ", t.amount);
        console.log("TYPEOF T AMOUNT: ", typeof t.amount);
        if(t.type === "INFLOW") { inflow += t.amount }
        else if(t.type === "OUTFLOW") { outflow += t.amount }
        ;} );
    console.log("INFLOW: ", inflow);
    console.log("TYPEOF INFLOW: ", typeof inflow);
    console.log("TYPEOF INFLOW: ", typeof inflow);
    console.log("OUTFLOW: ", outflow);
    console.log("TYPEOF OUTFLOW: ", typeof outflow);
    await Balance.update(
        { funds: Math.round((inflow - outflow) * 100)/100 },
        { where: { id: 1 } }
    );
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