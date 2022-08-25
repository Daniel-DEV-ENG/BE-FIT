const { validationResult } = require('express-validator/check')
const Coach = require('../../model/Coach');
const ErrorApi = require('../error/ErrorApi');
const Api404Error = require('../error/api404Error');
const multer = require('multer');

///---------------------------------------- C O A C H -------------------------------------------------------------
////////////////////////////////////////add new coach//////////////////////////////////////////////
exports.postAddCoach = async (req, res, next) => {
    const coachFirstName = req.body.coachFirstName
    const coachLastName = req.body.coachLastName
    const password = req.body.password
    const phone = req.body.phone
    const TraningType = req.body.TraningType
    const Age = req.body.Age
    const image = req.file
    const email = req.body.email
    const Gender = req.body.gender
    const experiences = req.body.experiences
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    let coachIsExists = await Coach.findOne({ where: { coachFirstName: req.body.coachFirstName } })
    if (coachIsExists) {
        return res.status(200).send("the Coach Name Is Exists")
    }
    const coach = await Coach.create({
        coachFirstName: coachFirstName,
        coachLastName: coachLastName,
        password: password,
        email: email,
        phone: phone,
        TraningType: TraningType,
        Gender:Gender,
        Age: Age,
        img: image.path,
        experiences: experiences,

    }).then(() => {
        res.status(200).send("add Coach");

    })
        .catch((err) => {
            console.log(' notfound please try again');
            next(ErrorApi.badRequest(' something wrong ...'))
            //return;

        })

}
///////////////////////////////////////////////////////update C O A C H ////////////////////////////////////
exports.EditCoach = (req, res, next) => {
    const coach_Id = req.params.id
    const coachFirstName = req.body.coachFirstName;
    const coachLastName = req.body.coachLastName;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;
    const TraningType = req.body.TraningType;
    const Age = req.body.Age;
    const img = req.file;
    const experiences = req.body.experiences;
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    Coach.findByPk(coach_Id)
        .then(coach => {
            coach.coachFirstName = coachFirstName;
            coach.coachLastName = coachLastName;
            coach.password = password;
            coach.email = email;
            coach.phone = phone;
            coach.TraningType = TraningType;
            coach.Age = Age;
            coach.img = img;
            coach.experiences = experiences

            return coach.save();
        })
        .then(result => {
            res.status(200).send("update coach");

        })
        .catch(err => {
            console.log('exercise notfound please try again');
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;

        });
}
////////////////////////////////// D E L E T E   C O A C H //////////////////////////////////
exports.postDeleteCoach = (req, res, next) => {
    const coach_id = req.params.id;
    Coach.destroy({
        where: { Coach_id: coach_id },
    }).then(count => {
        if (!count) {
            return res.status(404).send({ error: 'No user' });
        }
        res.status(200).send('delete successfully');
        console.log(`delete Coach_id: ${coach_id} successfully`);
    })
        .catch((err) => {
            console.log('fodd notfound please try again');
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;
        })
}