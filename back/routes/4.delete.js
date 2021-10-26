const { Router } = require("express");
const router = Router();
const { Transaction } = require('../db');

module.exports = router.delete('/:id', async (req, res, next) => {
    const paramsId = req.params.id;
    try {
        let deleted = await Transaction.destroy(
            { where: {id: paramsId} },
        );
        return res.json({deleted: true});
    } catch(e) { console.log(e) }
});