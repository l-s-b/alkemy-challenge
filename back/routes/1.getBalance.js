const { Router } = require('express');
const router = Router();
const { Balance, Transaction } = require('../db');

module.exports = router.get('/', async (_req, res, next) => {
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