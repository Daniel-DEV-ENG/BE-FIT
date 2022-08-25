const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');
const Food = require('./food')
const Diet = sequelize.define('diet', {
    diet_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dietName: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: true
    },
    dietType: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: true
    },
    fromDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    toDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    image:{
        type:Sequelize.STRING,
        allowNull:true
    },
    meal1:{
type:Sequelize.TEXT,
allowNull:false
},
meal2:{
    type:Sequelize.TEXT,
    allowNull:false
    },
    meal3:{
        type:Sequelize.TEXT,
        allowNull:false
        },
        meal4:{
            type:Sequelize.TEXT,
            allowNull:false
            },
            meal5:{
                type:Sequelize.TEXT,
                allowNull:false
                }

});
Food.belongsToMany(Diet,{through:'foodDiet'})
Diet.belongsToMany(Food,{through:'foodDiet'})

module.exports = Diet;