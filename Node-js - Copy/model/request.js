const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const Request = sequelize.define('request', {
    request_id: {
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
    
    message: {
        type: Sequelize.TEXT,
        isEmail: true,
        allowNull: false
    },

   

});



module.exports = Request;