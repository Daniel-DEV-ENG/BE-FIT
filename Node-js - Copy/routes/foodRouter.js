const FoodControllers = require('../controllers/FoodControllers');
const food = require('../model/food');
const express = require('express');
const router = express.Router();
////////////////////////////////////////////
router.use('/foods', FoodControllers.getfood);
router.use('/fruits', FoodControllers.getfruitfood);
router.use('/meats', FoodControllers.getmeatfood);
router.use('/grain', FoodControllers.getgreanfood);
router.use('/vegetabels', FoodControllers.getvegetabelsfood);











module.exports = router;