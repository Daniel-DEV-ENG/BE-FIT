const { validationResult } = require('express-validator/check')
const User = require('../../model/User');
const ErrorApi = require('../error/ErrorApi');
const Api404Error = require('../error/api404Error');
const multer = require('multer');
const Coach = require('../../model/Coach');
//-------------------------------------USER---------------------------------------------------------//
//////////////////////////////add   new     USER /////////////////////////////////////////////////////
exports.postAddUser = (req, res, next) => {
    const userFirstName = req.body.userFirstName
    const userLastName = req.body.userLastName
    const email = req.body.email
    const password = req.body.password
    const phone = req.body.phone
    const username = req.body.username
    const Age = req.body.Age
    const Gender = req.body.Gender
    const date = req.body.date
    const image = req.file
   const  coach_id = req.body.coach_id
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }

    const user = User.create({
        userFirstName: userFirstName,
        userLastName: userLastName,
        password: password,
        email: email,
        phone: phone,
        username: username,
        Age: Age,
        Gender: Gender,
        date: date,
        image: image,
        coach_id:coach_id
    }).then(() => {
        
        res.status(200).send("User registerd... Please Login !!!");

    })
        .catch((err) => {
            console.log(err);
            //next(ErrorApi.badRequest(' something wrong ...'))
            //return;
        })
    // io.getIO().emit('posts', { action: 'create', post: post })
}
///////////////////////////////////////////////////////update USER ////////////////////////////////////
exports.postEditUser = (req, res, next) => {
    const user_id = req.params.id
    const updatedFname = req.body.userFirstName;
    const updatedlname = req.body.userLastName;
    const updatedemail = req.body.email;
    const updatedpass = req.body.password;
    const updatedphone = req.body.phone;
    const updateAddress = req.body.Address;
    const Age = req.body.Age
    const gender = req.body.gender
    const image = req.file
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    User.findByPk(user_id)
        .then(user => {
            user.userFirstName = updatedFname;
            user.userLastName = updatedlname;
            user.Address = updateAddress;
            user.phone = updatedphone;
            user.password = updatedpass
            user.email = updatedemail
            user.Age = Age
            user.Gender = gender
            user.image = image
            return user.save();
        })
        .then(() => {
            res.status(200).send("user update");
        })
        .catch(err => {
            console.log('the user dont founded plz try again')
            //res.status(404).send('error ')
            next(ErrorApi.NOT_FOUND('user is not found and something wrong'))
            return;

            //throw new Api404Error(`user with id :${req.params.id} not found`);
        });
}
//////////////////////////////////delete USER//////////////////////////////////
exports.postDeleteUser = (req, res, next) => {
    const user_id = req.params.id;
    if (!user_id) {
        next(ErrorApi.badRequest('user is required and must be non blank'))
        return;
    }

    User.destroy({
        where: { user_id: user_id }
    }).then(count => {
        if (!count) {
            return res.status(404).send({ error: 'No user' });
        }
        res.status(200).send('delete successfully');
        console.log(`delete food ID: ${user_id} successfully`);
    })
        .catch((err) => {
            console.log('user notfound please try again');
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;
        })

}


