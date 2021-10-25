const { Router } = require("express");
const router = Router();
const { Transaction, Balance } = require('../db');

module.exports = router.post('/', async (req, res) => {
    const submitted = req.body;
    try { // FIRST, CREATE TRANSACTION:
        let [ thisTransaction, justAdded ]  = await Transaction.findOrCreate({
            where: {
                // UUID is auto-generated.
                item: submitted.item,
                amount: submitted.amount,
                date: submitted.date,
                type: submitted.type,
                category: submitted.category,
            }
        });
        //THEN, MODIFY FUNDS:
        let balance = await Balance.findAll( { where: {id: 1} });
        let sum = () => { switch(thisTransaction.type) {
            case "INFLOW": return balance[0].dataValues.funds + thisTransaction.amount;
            case "OUTFLOW": return balance[0].dataValues.funds - thisTransaction.amount;
            default: break;
        };}
        /*
        console.log('TYPEOF THISTRANSACTION.AMOUNT: ', typeof thisTransaction.amount);
        console.log('THISTRANSACTION.AMOUNT: ', thisTransaction.amount);
        console.log('TYPEOF BALANCE[0].dataValues.funds: ', typeof balance[0].dataValues.funds);
        console.log('BALANCE[0].dataValues.funds: ', balance[0].dataValues.funds);
        console.log('BALANCE: ', balance);
        console.log(sum());
        */
        await Balance.update(
            { funds: sum() },
            { where: { id: 1 } }
        );

        console.log(justAdded ? "Transaction successfully added." : "Already found.");
        return res.json(thisTransaction);
    } catch(e) { console.error(e) }
});
