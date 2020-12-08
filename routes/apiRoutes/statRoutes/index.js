const router = require('express').Router();
const statController = require('../../../controllers/statController');
const authMiddleware = require('../../../middlewares/authorizationMiddleware');

router.use(authMiddleware);

router.route('/')
    .post(statController.createStat)
    .get(statController.getAllStats);

router.route('/:id')
.get(statController.getStatsById)
.patch(statController.updateStatById);

module.exports = router;