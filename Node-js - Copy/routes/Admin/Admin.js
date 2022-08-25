const express = require('express');
const router = express.Router();
const AdminFood = require('./AdminApiFood')
const AdminDiet = require('./AdminApiDiet')
const AdminCoach = require('./AdminApiCoach')
const AdminUser = require('./AdminApiUser')
const AdminExercise = require('./AdminApiExerecise')
const AdminWorkout = require('./AdminApiWorkout')
const AdminSupplement=require('./AdminApiSupplement')
const app = express();
app.use(express.urlencoded({extended:true}));
router.use('/food', AdminFood);
router.use('/diet', AdminDiet);
router.use('/Coach', AdminCoach);
router.use('/User', AdminUser);
router.use('/Exercise', AdminExercise);
router.use('/Workout', AdminWorkout);
router.use('/Supplement', AdminSupplement);
module.exports = router;





