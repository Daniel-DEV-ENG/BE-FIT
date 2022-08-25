
const express = require('express');

const authController = require('../controllers/auth');
const validateToken = require('../middleware/ValidateToken');
const router = express.Router();




router.post('/login', authController.postLogin);
router.get('/reset', authController.getReset);
router.post('/reset', authController.PostReset);
router.get('/showme', validateToken, authController.getme)
router.put('/updateinfo', validateToken, authController.UpdateInfo)


router.post('/signups', authController.postSignup);

router.get('/logout', authController.postLogout);// شغال بس بدون واجهة 

router.get('/reset/:token', authController.getNewPassword);


router.post('/new-password', authController.postNewPassword);
module.exports = router;