const { Router } = require('express');
const router = Router();

// Require all individual routes;
const balance = require('./1.getBalance.js');
const all = require('./2.getAll.js');
const detail = require('./3.getDetail.js');
const put = require('./6.put.js');
const post = require('./4.post.js');
const del = require('./5.delete.js');

// Route setup
router.use('/transactions', all);
router.use('/transaction', detail);
router.use('/transaction', post);
router.use('/main', balance);
/* router.use('/', put);

router.use('/', del); */

module.exports = router;