
const Food = require('../model/food')
///////////////////////////////////////////GET ALL FOOD/////
exports.getfood = async (req, res, next) => {
    const foods = await Food.findAll();
    console.log(foods.every(food => food instanceof Food));
    res.send(foods)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE meat////////////////
exports.getmeatfood = async (req, res, next) => {
    const foods = await Food.findAll(
        { where: { foodType: 'Meats' } }
    );
    console.log(foods.every(food => food instanceof Food));
    res.send(foods)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE Fruit////////////////
exports.getfruitfood = async (req, res, next) => {
    const foods = await Food.findAll(
        { where: { foodType: 'Fruits' } }
    );
    console.log(foods.every(food => food instanceof Food));
    res.send(foods)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE vegetabels////////////////
exports.getvegetabelsfood = async (req, res, next) => {
    const foods = await Food.findAll(
        { where: { foodType: 'Vigetables' } }
    );
    console.log(foods.every(food => food instanceof Food));
    res.send(foods)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
exports.getgreanfood = async (req, res, next) => {
    const foods = await Food.findAll(
        { where: { foodType: 'Grain' } }
    );
    console.log(foods.every(food => food instanceof Food));
    res.send(foods)
    //console.log("All users:", JSON.stringify(users, null, 2));
};