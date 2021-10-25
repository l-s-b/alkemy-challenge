const { Router } = require('express');
const router = Router();
const { Balance } = require('../db');

module.exports = router.get('/', async (_req, res, next) => {
    try {
        const balance = await Balance.findOrCreate({
            where: {id: 1}
    });
        return res.json(balance[0]);
    } catch(e) { next(e) }
});