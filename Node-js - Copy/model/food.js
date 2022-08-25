const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const Food = sequelize.define('food', {
    food_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    foodName: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: true
    },
    foodType: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: true
    },


    weight: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    calories: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    protein: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    carb: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }
});


module.exports = Food;