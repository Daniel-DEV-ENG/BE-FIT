const DietControllers = require('../controllers/DietControllers');
const express = require('express');
const router = express.Router();
////////////////////////////////////////////
router.use('/Diets', DietControllers.getDiet);
router.use('/addFood', DietControllers.addFood);
router.use('/WieghtGain',DietControllers.getWieghtGain);
router.use('/LossFat', DietControllers.getLossFat);











module.exports = router;