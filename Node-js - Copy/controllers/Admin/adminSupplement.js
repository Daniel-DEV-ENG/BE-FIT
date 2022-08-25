const { validationResult } = require('express-validator/check')
const Supplement = require('../../model/Supplement');
const ErrorApi = require('../error/ErrorApi');
const Api404Error = require('../error/api404Error');
const multer = require('multer');
///----------------------------------------  D I E T ------------------------------------------------------------
////////////////////////////////////////add new Supplement//////////////////////////////////////////////
exports.postAddSupp = async (req, res, next) => {
    const supName = req.body.supName
    const supType = req.body.supType
    const description = req.body.description
    const image=req.file;
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    let suppIsExists = await Supplement.findOne({ where: { supName: req.body.supName } })
    if (suppIsExists) {
        return res.status(200).send("the Supplement Name Is Exists")
    }
    const supplement = await Supplement.create({
        supName: supName,
        supType: supType,
        description: description,
        image:image.path    
    }).then(() => {
        res.status(200).send('Supplement Added !!! ');
    })
        // .catch((err) => {
        //     next(ErrorApi.badRequest('food_id is required and must be non blank'))
        //     return;
        // })

}
///////////////////////////////////////////////////////update DIIET ////////////////////////////////////
exports.EditSupplement = (req, res, next) => {
    const sup_Id = req.params.id
    const updatedName = req.body.supName;
    const supType = req.body.supType;
    const description = req.body.description;
    const updatedimage=req.file;
    //to check from request body is validate
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array()[0].msg)
        return res.status(422).json({ errors: error.array() });

    }
    Supplement.findByPk(sup_Id)
        .then(supplement => {
            supplement.supName = updatedName;
            supplement.supType = supType;
            supplement.description = description;
            supplement.image=updatedimage;
            return supplement.save();
        })
        .then(result => {
            res.status(200).send("Supplement update");
        })
        .catch(err => {
            next(ErrorApi.NOT_FOUND('Supplement_id is not found'))
            return;
        });
}
//////////////////////////////////           delete Deit                 //////////////////////////////////
exports.postDeleteSupplement = (req, res, next) => {
    const Sup_id = req.params.id;


    Supplement.destroy({
        where: { sup_id: Sup_id },
    }).then(count => {
        if (!count) {
            return res.status(404).send({ error: 'No user' });
        }
        res.status(200).send('delete successfully');
        console.log(`delete food ID: ${Sup_id} successfully`);
    })
        .catch((err) => {
            console.log('fodd notfound please try again');
            next(ErrorApi.NOT_FOUND(' something wrong ...'))
            return;
        })

}