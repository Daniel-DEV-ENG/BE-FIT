const CoachControllers = require('../controllers/CoachControllers');
const express = require('express');
const router = express.Router();
////////////////////////////////////////////
router.use('/CoachUser', CoachControllers.getCoachUser);
router.use('/CoachWorkout', CoachControllers.getCoachWorkout);
router.use('/power', CoachControllers.getPowerlifting);
router.use('/building',CoachControllers.getBodybuilding);
router.use('/fitness', CoachControllers.getFitness);










module.exports = router;