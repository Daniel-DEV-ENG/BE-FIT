

module.exports = function (req, res, next)  {
    
    

        if (!req.user.user.isAdmin) return res.status(401).json({msg: 'You Are not Admin....' })
console.log(req.user.user.isAdmin)
next();
}