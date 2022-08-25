const SupplementControllers = require('../controllers/SuppllementController');
const supplement = require('../model/Supplement');
const express = require('express');
const router = express.Router();
////////////////////////////////////////////
router.use('/supplements', SupplementControllers.getsupplement);
router.use('/preworkout', SupplementControllers.getPreworkout);
router.use('/protien', SupplementControllers.getprotine);
router.use('/vitamen', SupplementControllers.getvitamens);











module.exports = router;