const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const Workout = sequelize.define('workout', {
    workout_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    workOutType: { type: Sequelize.STRING, allowNull: false },
    workOutDays: { type: Sequelize.STRING, allowNull: false },

   

    image:{
        type:Sequelize.STRING,
        allowNull:true
    }
});


module.exports = Workout;
