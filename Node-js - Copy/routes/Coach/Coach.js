const express = require('express');
const router = express.Router();
const CoachDiet = require('./clientDiet')
const CoachWorkout = require('./ClientProgramRouter')
const app = express();
app.use(express.urlencoded({extended:true}));
router.use('/diet', CoachDiet);
router.use('/program', CoachWorkout);
module.exports = router;

