const jwt=require('jsonwebtoken')
const api_key='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'
module.exports = function validateToken(req, res, next) {
    //get token from request header
    const authHeader = req.headers["token"]
    //const token = authHeader.split("Bearer")[1]
    //the request header contains the token "Bearer <token>", split the string and use the second value in the split array.
    //if (token == null) res.sendStatus(400).send("Token not present")
    jwt.verify(authHeader,api_key, (err,id) => {
    // if (err) { 
    //  res.status(403).send("Token invalid")
    //  }
    // else {
     req.id = id
     next() //proceed to the next action in the calling function
      }
   // }
    ) //end of jwt.verify()
    } //end of function
  