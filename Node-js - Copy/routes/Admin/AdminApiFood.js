const { check, body } = require("express-validator")
const AdminControllers = require('../../controllers/Admin/adminFood');
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer')
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
///////////////////////////////food//////////////////////////////
router.post('/addFood', imageUpload.single('image'),
    // [

    //     body('foodName', 'please enter Type ')
    //         .isLength({ min: 3 })
    //         .isAlpha()
    //     ,
    //     body('foodType', 'please enter Type ')
    //         .isLength({ min: 3 })
    //         .isAlpha()
    //     ,
    //     body('calories', 'please enter the correct Age')
    //         .custom((calories, req) => {
    //             if ((calories > 10) && (calories < 100)) {
    //                 console.log('><><')

    //                 return true
    //             }

    //         })
    //     ,
    //     body('protein', 'please enter the correct Age')
    //         .custom((protein, req) => {
    //             if ((protein > 3) && (protein < 40)) {
    //                 console.log('><><')

    //                 return true
    //             }

    //         })
    //     ,
    //     body('carb', 'please enter the correct Age')
    //         .custom((carb, req) => {
    //             if ((carb > 0) && (carb < 40)) {
    //                 console.log('><><')

    //                 return true
    //             }

    //         })
    // ], 
    AdminControllers.postAddFood);
router.put('/updateF/:id'
//  [

//     body('foodName', 'please enter Type ')
//         .isLength({ min: 3 })
//         .isAlpha()
//     ,
//     body('foodType', 'please enter Type ')
//         .isLength({ min: 3 })
//         .isAlpha()
//     ,
//     body('calories', 'please enter the correct Age')
//         .custom((calories, req) => {
//             if ((calories > 10) && (calories < 100)) {
//                 console.log('><><')

//                 return true
//             }

//         })
//     ,
//     body('protein', 'please enter the correct Age')
//         .custom((protein, req) => {
//             if ((protein > 3) && (protein < 40)) {
//                 console.log('><><')

//                 return true
//             }

//         })
//     ,
//     body('carb', 'please enter the correct Age')
//         .custom((carb, req) => {
//             if ((carb > 0) && (carb < 40)) {
//                 console.log('><><')

//                 return true
//             }

//         })
// ]
,  AdminControllers.EditFood);
router.delete('/deleteFood/:id',  AdminControllers.postDeleteFood)

router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


module.exports = router;
