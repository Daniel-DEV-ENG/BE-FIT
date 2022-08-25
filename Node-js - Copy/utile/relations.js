const sequelize = require('./DataBase');
const User = require('../model/User')
const Coach = require('../model/Coach')
const Diet = require('../model/Diet')
const Workout=require('../model/workout')
const Food=require('../model/food')
const Supplement=require('../model/Supplement')
const Exercise=require('../model/Exercise')

//  Food.belongsToMany(Diet,{through:'foodDiet'})
//  Diet.belongsToMany(Food,{through:'foodDiet'})
  //   {
    //     through: "food-diets",
    //     as: "Diets",
    //     foreignKey: "food_id",
    // });
    // Diet.belongsToMany(Food, {
    //     through: "food-diets",
    //     as: "Foods",
    //     foreignKey: "diet_id",
    // });
// ///////---------------------Diet-Foods-------------------//
// Food.belongsToMany(Diet, {
//     through: "food-diets",
//     as: "Diets",
//     foreignKey: "food_id",
// });
// Diet.belongsToMany(Food, {
//     through: "food-diets",
//     as: "Foods",
//     foreignKey: "diet_id",
// });
// ///////---------------------Diet-Supplements-------------------//
Supplement.belongsToMany(Diet, {
    through: "supp_diet",
    as: "diet",
    foreignKey: "sup_id",
});
Diet.belongsToMany(Supplement, {
    through: "supp_diet",
    as: "Supplements",
    foreignKey: "diet_id",
});
// //------------------------------Exercise-workout------------------//
Workout.belongsToMany(Exercise, {
    through: "Exercise-Workout",
    as: "Exercises",
    foreignKey: "workout_id",
});
Exercise.belongsToMany(Workout, {
    through: "Exercise-workout",
    as: "Workouts",
    foreignKey: "exercise_id",
});
// // //-------------------1 Diet M users----------------//
// User.belongsTo(Diet, {
//     foreignKey: "d_id",
//     as: "d",
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
// });
// Diet.hasMany(User, { as: "Client" });
// // //--------------------1Coach M Users--------------//
Coach.hasMany(Workout,{as:"workout"});
Workout.belongsTo(Coach ,{as:"Coach"});

// Coach.hasMany(Diet, { as: "Diets" });
// Diet.belongsTo(Coach);

//  Coach.hasMany(User, { as: "Client" });
//  User.belongsTo(Coach,{foreignkey:'coach_id',as:"Coach"});
sequelize
    .sync({focus:true})//delete all old data in my database and rebuild it
/////////////////////////////////////////////////////////////////////////////////////
