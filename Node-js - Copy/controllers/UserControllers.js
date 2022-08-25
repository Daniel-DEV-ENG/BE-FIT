const User = require('../model/user');
exports.getUsers = async (req, res, next) => {
    const user = await User.findAll({include: [{
        model: Coach
    }]});
    //console.log(user.every(food => food instanceof User));
    res.send(user);
};
///////////////////////////////////////GET FOOD TYPE Fruit////////////////
exports.getWieghtGain = async (req, res, next) => {
    const bodybuildings = await User.findAll(
        { where: { traintype: 'Bodybuilding' } }
    );
    console.log(bodybuildings.every(bodybuilding => bodybuilding instanceof User));
    res.send(bodybuildings)
    //console.log("All users:", JSON.stringify(users, null, 2));
  };
  ///////////////////////////////////////GET FOOD TYPE vegetabels////////////////
  exports.getLossFat = async (req, res, next) => {
    const LossFats = await User.findAll(
        { where: { traintype: 'fitness' } }
    );
    console.log(LossFats.every(LossFat => LossFat instanceof User));
    res.send(LossFats)
    //console.log("All users:", JSON.stringify(users, null, 2));
  };
  
  exports.getLossFats = async (req, res, next) => {
    const LossFats = await User.findAll(
        { where: { traintype: 'PowerLifting' } }
    );
    console.log(LossFats.every(LossFat => LossFat instanceof User ));
    res.send(LossFats)
    //console.log("All users:", JSON.stringify(users, null, 2));
  };