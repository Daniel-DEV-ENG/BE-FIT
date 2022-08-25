
const Supplement = require('../model/Supplement')
///////////////////////////////////////////GET ALL FOOD/////
exports.getsupplement = async (req, res, next) => {
    const supplements = await Supplement.findAll();
    console.log(supplements.every(supplements => supplements instanceof Supplement));
    res.send(supplements)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE meat////////////////
exports.getPreworkout = async (req, res, next) => {
    const preworkout = await Supplement.findAll(
        { where: { supType: 'Prework' } }
    );
    console.log(preworkout.every(preworkout => preworkout instanceof Supplement));
    res.status(200).send(preworkout)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE Fruit////////////////
exports.getprotine= async (req, res, next) => {
    const protine = await Supplement.findAll(
        { where: { supType: 'Protein' } }
    );
    console.log(protine.every(protine => protine instanceof Supplement));
    res.send(protine)
    //console.log("All users:", JSON.stringify(users, null, 2));
};
///////////////////////////////////////GET FOOD TYPE vegetabels////////////////
exports.getvitamens = async (req, res, next) => {
    const vitamens  = await Supplement.findAll(
        { where: { supType: 'Vitamin' } }
    );
    console.log(vitamens .every(vitamens  => vitamens  instanceof Supplement));
    res.send(vitamens )
    //console.log("All users:", JSON.stringify(users, null, 2));
};