const jwt = require("jsonwebtoken");
const User = require("../model/User");

exports.Auth = async (req, res, next) => {
    try {
        const api_key='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'
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({
                msg: 'Access denied'
            })
        }
        const decode = jwt.verify(token, api_key);
        req.user=decode
        // if (!user) {
        //     return res.status(401).json({
        //         msg: "Access denied"
        //     })
        // }
        next()
    } catch (error) {
        res.status(404).json({
            msg: error.message
        })
    }
}