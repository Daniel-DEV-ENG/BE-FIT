const Request = require('../model/request')
exports.PostRequest = async (req, res, next) => {
    
    const name=req.body.name;
    const message=req.body.message;
    await Request.create({
        name:name,
        message:message
    }).then(()=>{
       res.status(200).send(" Request Sent !!!!")
    })
    .catch(err=>{
        res.send("somthing error please try again...")
    })
    //console.log(user.every(food => food instanceof User));
   
};

