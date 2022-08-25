const { validationResult } = require('express-validator/check')
const Food = require('../../model/food');
const ErrorApi = require('../error/ErrorApi');
const Api404Error = require('../error/api404Error');
const multer = require('multer');
const path = require('path');
///----------------------------------------FOOD-------------------------------------------------------------
////////////////////////////////////////add new food//////////////////////////////////////////////


exports.postAddFood = async (req, res, next) => {
    const foodName = req.body.foodName
    const foodType = req.body.foodType
    const weight = req.body.weight
    const calories = req.body.calories
    const protein = req.body.protein
    const carb = req.body.carb
    const imageUrl= req.file
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    let FoodIsExists = await Food.findOne({ where: { foodName: req.body.foodName } })
    if (FoodIsExists) {
        return res.status(200).send("the Food Name Is Exists")
    }
    const food = await Food.create({
        foodName: foodName,
        foodType: foodType,
        weight: weight,
        calories: calories,
        protein: protein,
        image: imageUrl.path,
        carb: carb
    }).then(() => {
        res.status(200).send("  Food  Added  !!!!");
    })
        .catch((err) => {
            console.log('error in details');
            //next(ErrorApi.badRequest(' something wrong ...'))
           console.log(err)
            return;
        })

}
///////////////////////////////////////////////////////update FOOD ////////////////////////////////////
exports.EditFood = (req, res, next) => {
    const food_Id = req.params.id
    const updatedName = req.body.foodName;
    const updatedfoodType = req.body.foodType;
    const updatedweight = req.body.weight;
    const updatedcalories = req.body.calories;
    const updatedprotein = req.body.protein;
    const updatecarb = req.body.carb;
    const updateimage = req.file;
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    Food.findByPk(food_Id)
        .then(food => {
            food.foodName = updatedName;
            food.foodType = updatedfoodType;
            food.weight = updatedweight;
            food.calories = updatedcalories;
            food.protein = updatedprotein
            food.carb = updatecarb
            food.image=updateimage
            return food.save();
        })
        .then(result => {
            res.status(200).send("update food");

        })
        .catch(err => {
            console.log('the food dont founded plz try again')
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;
        });
}
//////////////////////////////////delete FOOD//////////////////////////////////
exports.postDeleteFood = (req, res, next) => {
    const food_id = req.params.id;
    if (!food_id) {
        next(ErrorApi.badRequest('food_id is required and must be non blank'))
        return;
    }
    console.log(`delete food ID: ${food_id} successfully`);

    Food.destroy({
        where: { food_id: food_id },
    }).then(count => {
        if (!count) {
            return res.status(404).send({ error: 'No user' });
        }
        res.status(200).send('delete successfully');
        console.log(`delete food ID: ${food_id} successfully`);
    })
        .catch((err) => {
            console.log('fodd notfound please try again');
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;
        })


}