const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const Exercise = sequelize.define('exercise', {
  exercise_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  exerciseName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  exerciseType: {
    type: Sequelize.STRING,
    allowNull: false
  },



  bodyBuildingSet: {
    type: Sequelize.STRING,
  }
  ,
  fitSets: Sequelize.STRING,
  image:{
    type:Sequelize.STRING,
    allowNull:true
}
});

module.exports = Exercise;