const { check, body } = require("express-validator")
const AdminControllers = require('../../controllers/Admin/adminCoach');
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
// ////////////////////////////////////Coach///////////////////////////////
router.post('/addCoach',imageUpload.single('image'),
//  [
//     check('email')
//         .isEmail()
//         .withMessage('Please enter valid Email..')
//         .normalizeEmail()
//     ,
//     // body('password', 'please enter password with only number and text and at least 5 characters')
//     //     .isLength({ min: 6 })
//     //     .isAlphanumeric()
//     //     .trim() //to delete white spaces 
//     // ,
//     body('userFirstName', 'please enter Name ')
//         .isLength({ min: 3 })
        
//     ,
//     body('phone', 'please enter the correct phone number ')
//         .isNumeric({ no_symbols: false })
//         .isMobilePhone()
//     ,
//     body('Address', 'please enter the correct address')
//         .isLength({ min: 3 })
//         .isAlphanumeric()
//     ,
//     body('Age', 'please enter the correct Age')
//         .custom((Age, req) => {
//             if ((Age > 15) && (Age < 80)) {
//                 console.log('><><')

//                 return true
//             }
//         })]
        AdminControllers.postAddCoach);
router.put('/updateCoach/:id', [
    check('email')
        .isEmail()
        .withMessage('Please enter valid Email..')
        .normalizeEmail()
    ,
    body('password', 'please enter password with only number and text and at least 5 characters')
        .isLength({ min: 6 })
        .isAlphanumeric()
        .trim() //to delete white spaces 
    ,
    body('userFirstName', 'please enter Name ')
        .isLength({ min: 3 })
        .isAlpha()
    ,
    body('phone', 'please enter the correct phone number ')
        .isNumeric({ no_symbols: false })
        .isMobilePhone()
    ,
    body('Address', 'please enter the correct address')
        .isLength({ min: 3 })
        .isAlphanumeric()
    ,
    body('Age', 'please enter the correct Age')
        .custom((Age, req) => {
            if ((Age > 15) && (Age < 80)) {
                console.log('><><')

                return true
            }
        })],  AdminControllers.EditCoach
)
router.delete('/deleteCoach/:id',  AdminControllers.postDeleteCoach);


module.exports = router;
