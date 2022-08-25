const { validationResult } = require('express-validator/check')
const Exercise = require('../../model/Exercise');
const ErrorApi = require('../error/ErrorApi')
const Api404Error = require('../error/api404Error');
const multer = require('multer');
//-------------------------------------------- E X E R C I S E --------------------------------//
////////////////////////////////////////add new exercise//////////////////////////////////////////////
exports.postAddExercise = async (req, res, next) => {
    const exerciseName = req.body.exerciseName
    const exerciseType = req.body.exerciseType
    const bodyBuildingSet = req.body.bodyBuildingSet
    const fitSets = req.body.fitSets
    const image=req.file
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });
    }
    // let ExerIsExists = await Exercise.findOne({ where: { dietName: req.body.dietName } })
    // if (ExerIsExists) {
    //     return res.status(200).send("the Exercise Name Is Exists")
    // }
    const exercise = await Exercise.create({
        exerciseName: exerciseName,
        exerciseType: exerciseType,
        bodyBuildingSet: bodyBuildingSet,
        fitSets: fitSets,
        image:image.path
    }).then(() => {
        res.status(200).send("add exersize");

    })
        .catch((err) => {

            console.log('exercise notfound please try again');
           // next(ErrorApi.badRequest(' something wrong ...'))
            //return;
        })
    console.log(exercise);
}
///////////////////////////////////////////////////////update Exercise ////////////////////////////////////
exports.EditExercise = (req, res, next) => {
    const exercise_id = req.params.id
    const exerciseName = req.body.exerciseName;
    const exerciseType = req.body.exerciseType;
    const bodyBuildingSet = req.body.bodyBuildingSet;
    const fitSets = req.body.fitSets;
    const image=req.file
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });
    }
    Exercise.findByPk(exercise_id)
        .then(exercise => {
            exercise.exerciseName = exerciseName;
            exercise.exerciseType = exerciseType;
            exercise.bodyBuildingSet = bodyBuildingSet;
            exercise.fitSets = fitSets;
            exercise.image=image
            return exercise.save();
        })
        .then(result => {
            res.status(200).send("update exersize");

        })
        .catch(err => {
            console.log('exercise notfound please try again');
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;
        });
}
////////////////////////////////// D E L E T E   E X E R C I S E  //////////////////////////////////
exports.postDeleteExercise = (req, res, next) => {
    const exercise_id = req.params.id;
    console.log(`delete Exercise ID: ${exercise_id} successfully`);

    Exercise.destroy({
        where: { exercise_id: exercise_id },
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

}
