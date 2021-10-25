const { Router } = require('express');
const router = Router();

// Require all individual routes;
const main = require('./1.getAll.js');
const detail = require('./2.getDetail.js');
const put = require('./3.put.js');
const post = require('./4.post.js');
const del = require('./5.delete.js');

// Route setup
router.use('/', main);
router.use('/', detail);
router.use('/', put);
router.use('/', post);
router.use('/', del);

module.exports = router;