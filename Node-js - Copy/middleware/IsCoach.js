
module.exports = function(req,res,next){


    if(!req.user.user.isCoach) return  res.status(401).json({msg: 'You Are not Coach....' })
next();

}