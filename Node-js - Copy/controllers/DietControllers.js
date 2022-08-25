const Diet = require('../model/Diet');
const Food = require('../model/food');
//const Food_diet = require('../model/food_diet');
///////////////////////////////////////////GET ALL Diet/////
exports.getDiet = async (req, res, next) => {
    const diets = await Diet.findAll({
        include: [
            {
                model: Food,
                as: "Foods",
                attributes: ['food_id', 'foodName']

            },
        ],
    });
    // console.log(diets.every(Diet => Diet instanceof diets));
    res.send(diets)
    console.log(JSON.stringify(diets, null, 2));
    //console.log("All users:", JSON.stringify(users, null, 2));
};
////////////////////////////////////////////////////////
exports.addFood = async (req, res, next) => {
    const food_id = req.body.food_id
    const diet_id = req.body.diet_id
    return Food.findByPk(food_id)
    .then((food) => {
      if (!food) {
        console.log("diet not found!");
        return null;
      }
      return Diet.findByPk(diet_id).then((diet) => {
        if (!diet) {
          console.log("diet not found!");
          return null;
        }
        const food_diet =Food_diet.create({
            food_id: food_id,
            diet_id: diet_id,
      }).then(() => {
          res.status(200).send("add food");
  
      })
          .catch((err) => {
  
              console.log('exercise  notfound please try again');
              next(ErrorApi.badRequest(' something wrong ...'))
              return;
          })
        console.log(`>> added exrcise id=${food_id} to workout id=${diet_id}`);
        return diet;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding exrcise to workout: ", err);
    });
}
//////////////////////////////////////
///////////////////////////////////////GET FOOD TYPE Fruit////////////////
exports.getWieghtGain = async (req, res, next) => {
  const WieghtGain = await Diet.findAll(
      { where: { dietType: 'WeightGainDiets' } }
  );
  console.log(WieghtGain.every(WieghtGain => WieghtGain instanceof Diet));
  res.send(WieghtGain)
  //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE vegetabels////////////////
exports.getLossFat = async (req, res, next) => {
  const LossFat = await Diet.findAll(
      { where: { dietType: 'WeightLossDiets' } }
  );
  console.log(LossFat.every(LossFat => LossFat instanceof Diet));
  res.send(LossFat)
  //console.log("All users:", JSON.stringify(users, null, 2));
};
