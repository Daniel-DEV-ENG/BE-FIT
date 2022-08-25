const Exercise = require('../model/Exercise')
///////////////////////////////////////////GET ALL Diet/////
exports.getExercise = async (req, res, next) => {
    const exercises = await Exercise.findAll();
    // console.log(diets.every(Diet => Diet instanceof diets));
    res.send(exercises);
    //console.log("All users:", JSON.stringify(users, null, 2));
};
//////////////////////////////////////GET FOOD TYPE meat////////////////
exports.getstrength = async (req, res, next) => {
    const exercises = await Exercise.findAll(
        { where: { exerciseType: 'Strength' } }
    );
    console.log(exercises.every(exercise => exercise instanceof Exercise));
    res.send(exercises)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE Fruit////////////////
exports.getstrengthing = async (req, res, next) => {
    const exercises = await Exercise.findAll(
        { where: { exerciseType: 'Stretching' } }
    );
    console.log(exercises.every(exercise => exercise instanceof Exercise));
    res.send(exercises)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE vegetabels////////////////
exports.getAerobic = async (req, res, next) => {
    const exercises = await Exercise.findAll(
        { where: { exerciseType: 'Aerobic' } }
    );
    console.log(exercises.every(exercise => exercise instanceof Exercise));
    res.send(exercises)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
