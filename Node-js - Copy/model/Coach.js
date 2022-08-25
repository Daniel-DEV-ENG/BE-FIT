
const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');
const User = require('./User');
const Coach = sequelize.define('Coach', {
  coach_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  coachFirstName: { type: Sequelize.STRING, allowNull: false },
  coachLastName: { type: Sequelize.STRING, allowNull: false },

  password: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: { type: Sequelize.STRING, allowNull: true },
  traintype: { type: Sequelize.STRING, allowNull: true },
  Age: { type: Sequelize.INTEGER, allowNull: false },
  img: { type: Sequelize.STRING, allowNull: false },
  experiences: Sequelize.STRING, 
  date: {
    type: Sequelize.DATE,
    allowNull: true
},
  Gender: {
      type: Sequelize.ENUM("female", "male"),
      defaultValue: "male",

  },

});

module.exports = Coach

