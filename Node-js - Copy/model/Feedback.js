const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const Feedback = sequelize.define('feedback', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    }
    ,
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    subject: {
        type: Sequelize.STRING,
        notEmpty: true,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false
    },

   

});



module.exports = Feedback;