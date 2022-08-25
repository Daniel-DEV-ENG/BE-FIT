const { check, body } = require("express-validator")
const AdminControllers = require('../../controllers/Admin/adminSupplement');
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer')
const imageStorage = multer.diskStorage({
        // Destination to store image     
        destination: 'images',
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '_' + Date.now()
                + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
        }
    });
    const imageUpload = multer({
        storage: imageStorage,
        limits: {
            fileSize: 1000000 // 1000000 Bytes = 1 MB
        },
        fileFilter(req, file, cb) {
            if (!file.originalname.match(/\.(png|jpg)$/)) {
                // upload only png and jpg format
                return cb(new Error('Please upload a Image'))
            }
            cb(undefined, true)
        }
    })
// ////////////////////////////////////Supplement///////////////////////////////
router.post('/addSupplement', imageUpload.single('image'),
// [
  
//     body('supName', 'please enter Type ')
//         .isLength({ min: 3 })
//         .isAlpha()
// ,        
//         body('supType', 'please enter Type ')
//         .isLength({ min: 3 })
//         .isAlpha()


// ] 
 AdminControllers.postAddSupp);
router.put('/updateSupplement/:id', [
  
    body('supName', 'please enter Type ')
        .isLength({ min: 3 })
        .isAlpha()
,        
        body('supType', 'please enter Type ')
        .isLength({ min: 3 })
        .isAlpha()


], AdminControllers.EditSupplement);
router.delete('/deleteSupplement/:id',  AdminControllers.postDeleteSupplement)

module.exports = router;
