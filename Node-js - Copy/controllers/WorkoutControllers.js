const Workout = require('../model/workout');
//const Exercise_workout = require('../model/Exercise-workout');
const Exercise = require('../model/Exercise');
const Coach = require('../model/Coach');
exports.getWorkouts = async (req, res, next) => {
    const workout = await Workout.findAll({
        include: [
            {
                // model: Exercise,
                // as: "Exercises",
                
                  model: Coach,
                  as: "Coach",
                  attributes: ['coachFirstName']
          
              

            }
        ]
    });
    //console.log(Workout.every(food => food instanceof Workout));
    res.send(workout);
    console.log(JSON.stringify(workout, null, 2));
};

exports.addExercise = async (req, res, next) => {
    const exercise_id = req.body.exercise_id
    const workout_id = req.body.workout_id
            return Workout.findByPk(workout_id)
              .then((workout) => {
                if (!workout) {
                  console.log("workout not found!");
                  return null;
                }
                return Exercise.findByPk(exercise_id).then((exercise) => {
                  if (!exercise) {
                    console.log("exercise not found!");
                    return null;
                  }
                  const exercise_workout =Exercise_workout.create({
                    exercise_id: exercise_id,
                    workout_id: workout_id,
                }).then(() => {
                    res.status(200).send("add exersize");
            
                })
                    .catch((err) => {
            
                        console.log('exercise  notfound please try again');
                        next(ErrorApi.badRequest(' something wrong ...'))
                        return;
                    })
                  console.log(`>> added exrcise id=${exercise.id} to workout id=${workout.id}`);
                  return workout;
                });
              })
              .catch((err) => {
                console.log(">> Error while adding exrcise to workout: ", err);
              });
          };

