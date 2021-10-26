const { Router } = require("express");
const router = Router();
const { Transaction, Balance } = require('../db');

module.exports = router.put('/:id', async (req, res, next) => {
    const paramsId = req.params.id;
    const submitted = req.body;
    try {
        let modified = await Transaction.update(
            submitted,
            { where: {id: paramsId} },
        );
        return res.json({updated: true});
    } catch(e) { console.log(e) }
});