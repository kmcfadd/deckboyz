const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

// API routes
router.use('/api', apiRoutes);

// send app if no routes hit
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;