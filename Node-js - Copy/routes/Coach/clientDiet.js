const { check, body } = require("express-validator")
const AdminControllers = require('../../controllers/Coach/DietClient');
const express = require('express');
const { Auth } = require("../../middleware/auth");
const router = express.Router();
const isAdmin=require("../../middleware/isAdmin")
const multer = require('multer')
const path = require('path')
const PDFStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'programs/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname))
        // file.fieldname is name of the field (image)
        // path.extname get the uploaded file extension
    }
});
const pdfUpload = multer({
    storage: PDFStorage
    
})
// ////////////////////////////////////Workout///////////////////////////////
router.post('/addWorkout',pdfUpload.single('program'),AdminControllers.postAddWorkout);
///////////////////////////////////////////////////////////////////////////////
router.put('/updateWorkot/:id',[
  
    body('workOutType', 'please enter Type ')
        .isLength({ min: 3 })
        .isAlpha()


] ,Auth, AdminControllers.EditWorkout);
router.delete('/deleteWorkout/:id',  AdminControllers.postDeleteWorkout)

module.exports = router;
