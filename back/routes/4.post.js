const { Router } = require("express");
const router = Router();
const { Transaction, Balance } = require('../db');

module.exports = router.post('/', async (req, res) => {
    const submitted = req.body;
    try {
        let [ transaction, justAdded ]  = await Transaction.findOrCreate({
            where: {
                // UUID is auto-generated.
                item: submitted.item,
                amount: submitted.amount,
                date: submitted.date,
                type: submitted.type,
            }
        });
        console.log(justAdded ? "Transaction successfully added." : "Already found.");
        // E/R SETTING: Use 'setGenres' or 'addGenres' Sequelize methods
/*         await Balance.addTransactions(transaction); */
        return res.json(transaction);
    } catch(e) { console.error(e) }
});