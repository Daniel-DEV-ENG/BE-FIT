const WorkoutControllers = require('../controllers/WorkoutControllers');
const express = require('express');
const router = express.Router();
////////////////////////////////////////////
router.use('/workouts',WorkoutControllers.getWorkouts);
//router.use('/addExercise', WorkoutControllers.addExercise);











module.exports = router;