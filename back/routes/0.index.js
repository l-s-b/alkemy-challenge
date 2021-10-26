const { Router } = require('express');
const router = Router();

// Require all individual routes;
const get = require('./1.get.js');
const post = require('./2.post.js');
const put = require('./3.put.js');
const del = require('./4.delete.js');

// Route setup
router.use('/', get);
router.use('/transaction', post);
router.use('/transaction', put);
router.use('/transaction', del);

module.exports = router;