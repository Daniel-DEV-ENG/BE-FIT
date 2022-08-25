const { check, body } = require("express-validator")
const AdminControllers = require('../../controllers/Admin/adminDiet');
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images/',
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
////////////////////////////////////Diet///////////////////////////////
router.post('/addDiet', imageUpload.single('image'),
//  [

//     body('dietName', 'please enter dietName ')
//         .isLength({ min: 3 })
        
//     ,
//     body('dietType', 'please enter dietType ')
//         .isLength({ min: 3 })
//         .isAlpha()
    
// ]
 AdminControllers.postAddDiet);
router.put('/updateD/:id', [

    body('dietName', 'please enter dietName ')
        .isLength({ min: 3 })
        .isAlpha()
    ,
    body('dietType', 'please enter dietType ')
        .isLength({ min: 3 })
        .isAlpha()
    
], AdminControllers.postAddDietff);
router.delete('/deleteDiet/:id',  AdminControllers.postDeleteDiet)

module.exports = router;
