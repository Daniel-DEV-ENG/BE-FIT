const ExerciseControllers = require('../controllers/ExerciseControllers');
const express = require('express');
const router = express.Router();
////////////////////////////////////////////
router.use('/Exercises', ExerciseControllers.getExercise);
router.use('/strength', ExerciseControllers.getstrength);
router.use('/stretching',ExerciseControllers.getstrengthing );
router.use('/Aerobic', ExerciseControllers.getAerobic);











module.exports = router;