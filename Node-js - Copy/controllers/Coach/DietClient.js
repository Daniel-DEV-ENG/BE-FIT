const { validationResult } = require('express-validator/check')
const Workout = require('../../model/ClientDiet');
const ErrorApi = require('../error/ErrorApi');
const Api404Error = require('../error/api404Error');
const multer = require('multer');
///---------------------------------------- W O R K  O U T -------------------------------------------------------------
////////////////////////////////////////add new work out//////////////////////////////////////////////
exports.postAddWorkout = async (req, res, next) => {
    const CoachName = req.body.CoachName
    const UserName = req.body.UserName
    const program=req.file
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }


    const workout = await Workout.create({
        CoachName: CoachName,
        UserName: UserName,
        program: program.path,
    }).then(() => {
        res.status(200).send("add workout");
    })
        .catch((err) => {
            next(ErrorApi.badRequest('some thing wrong'))
            return;
        })

}
///////////////////////////////////////////////////////update W O R K O U T ////////////////////////////////////
exports.EditWorkout = (req, res, next) => {
    const workout_Id = req.params.id
    const workOutType = req.body.workOutType;
    const workOutDays = req.body.workOutDays;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const UpdateImage=req.file
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    
    Workout.findByPk(workout_Id)
        .then(workout => {
            workout.workOutType = workOutType;
            workout.workOutDays = workOutDays;
            workout.fromDate = fromDate;
            workout.toDate = toDate;
            workout.image=updatedimage
            return workout.save();
        })
        .then(result => {
            res.status(200).send("update workout");

        })
        .catch(err => {
            next(ErrorApi.NOT_FOUND('Workout_id is required and something wrong'))
            return;
        });
}
////////////////////////////////// D E L E T E   W O R K O U T //////////////////////////////////
exports.postDeleteWorkout = (req, res, next) => {
    const workout_id = req.params.id;
    console.log(`delete Workout ID: ${workout_id} successfully`);

    Workout.destroy({
        where: { workout_id: workout_id },
    }).then(count => {
        if (!count) {
            return res.status(404).send({ error: 'No user' });
        }
        res.status(200).send('delete successfully');
        console.log(`delete workout_ID: ${workouy_id} successfully`);
    })
        .catch((err) => {
            console.log('fodd notfound please try again');
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;
        })

        module.exports = Coach;
    }