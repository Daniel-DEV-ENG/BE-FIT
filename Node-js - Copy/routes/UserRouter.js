const gymControllers = require('../controllers/UserControllers');
const user = require('../model/User');
const express = require('express');
const feedback = require('../controllers/feedbackController');
const request = require('../controllers/requestControllers')
const router = express.Router();
////////////////////////////////////////////////////
router.get('/user', gymControllers.getUsers);
//router.post('/add', AdminControllers.postAddUser);
router.use('/bodybuilding',gymControllers.getWieghtGain);
router.use('/fitness', gymControllers.getLossFat);
router.use('/powerlifting',gymControllers.getLossFats);
////////////////////////////////////////////////////
router.post('/feedback',feedback.postfeedback);
//router.post('/add', AdminControllers.postAddUser);

router.post('/request',request.PostRequest);

module.exports = router;