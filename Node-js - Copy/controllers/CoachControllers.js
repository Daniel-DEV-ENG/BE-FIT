const Coach = require('../model/Coach');
const User = require("../model/User");
const Workout = require('../model/workout');
const Sequelize = require('sequelize');
const nodemailer = require('nodemailer');
const sequelize = require('../utile/DataBase');
const { QueryTypes } = require('sequelize');
///////////////////////////////////////////GET ALL Diet/////
exports.getCoachUser = async (req, res, next) => {
     const users = await sequelize.query("SELECT coachFirstName,userFirstName FROM coaches , users WHERE coaches.coach_id=users.coach_id", { type: QueryTypes.SELECT });
    res.send(users)
    
};
//////////////////////////////// API coches WorkOUTS
exports.getCoachWorkout = async (req, res, next) => {
    
    // const users = await sequelize.query("SELECT coachFirstName,workOutType FROM coaches , workouts WHERE coaches.coach_id=workouts.CoachCoachId", { type: QueryTypes.SELECT });
    const coachs = await Coach.findAll(
        { include:
        "workout"
         }
    );
    res.send(users)
};
//////////////////////////////////////GET FOOD TYPE meat////////////////
exports.getPowerlifting = async (req, res, next) => {
    const coachs = await Coach.findAll(
        { where: { TraningType: 'Powerlifting' } }
    );
    console.log(coachs.every(coach => coach instanceof Coach));
    res.send(coachs)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE Fruit////////////////
exports.getBodybuilding = async (req, res, next) => {
    const coachs = await Coach.findAll(
        { where: { TraningType: 'bodybuilding' } }
    );
    console.log(exercises.every(coach => coach instanceof Coach));
    res.send(coachs)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE vegetabels////////////////
exports.getFitness = async (req, res, next) => {
    const coachs = await Coach.findAll(
        { where: { TraningType: 'Fitness' } }
    );
    console.log(coachs.every(coach => coach instanceof Coach));
    res.send(coachs)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
