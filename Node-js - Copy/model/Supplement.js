

const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const Supplement = sequelize.define('supplement', {
  sup_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  supName: { type: Sequelize.STRING, allowNull: false },
  supType: { type: Sequelize.STRING, allowNull: false },

  description: Sequelize.STRING,
  image:{
    type:Sequelize.STRING,
    allowNull:true
}

});

module.exports = Supplement;