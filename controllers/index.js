const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./homeRoutes.js');
router.use('/', homeRoutes);

module.exports = router;