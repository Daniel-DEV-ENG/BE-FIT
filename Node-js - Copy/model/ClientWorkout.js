const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const Workout = sequelize.define('client_workout', {
    client_workout_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    CoachName: { type: Sequelize.STRING, allowNull: false },
    UserName: { type: Sequelize.STRING, allowNull: false },
    program:{
        type:Sequelize.STRING,
        allowNull:true
    }
});


module.exports = Workout;
