const router = require('express').Router();
const statRoutes = require('./statRoutes');

router.use('/stats', statRoutes);

module.exports = router;