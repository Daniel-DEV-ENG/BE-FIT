const { check, body } = require("express-validator")
const AdminControllers = require('../../controllers/Admin/adminUser');
const express = require('express');
const router = express.Router();
////////////////////////////user///////////////////////////////////
router.post(
    '/add/',
    [
        // check('email')
        //     .isEmail()

        //     .withMessage('Please enter valid Email..')
        //     .custom((value, { req }) => {
        //         return User.findOne({ where: { email: value } })
        //             .then(userDoc => {
        //                 if (userDoc) {
        //                     return Promise.reject('E-mail exists already,please pick different one.')
        //                 }
        //             })
        //     })
        //     .normalizeEmail()



        // ,
         body('password', 'please enter password with only number and text and at least 5 characters')
            .isLength({ min: 4 })

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
        body('username', 'please enter the correct UserName')
            .isLength({ min: 3 })
            

        ,
        body('Age', 'please enter the correct Age')
            .custom((Age, req) => {
                if ((Age > 15) && (Age < 80)) {
                    console.log('><><')

                    return true
                }

            })

    ]
     ,AdminControllers.postAddUser
);
router.put('/update/:id', [
    check('email')
        .isEmail()
        .withMessage('Please enter valid Email..')
        .normalizeEmail()
    ,
    body('password', 'please enter password with only number and text and at least 5 characters')
        .isLength({ min: 0 })
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
        })

],  AdminControllers.postEditUser);
router.delete('/delete/:id', AdminControllers.postDeleteUser)

module.exports = router;
