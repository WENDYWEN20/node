const {verifyToken} = require('../util/token.js')
function authenticate(req, res, next){
    const token= req.cookies.token;
    if(!token){
        //401 unauthorized 
        return res.status(401).json({message: "Please log in"})
    }
    const decoded=verifyToken(token)
    if(!decoded){
        return res.status(401).send('Invalid token')
    }
    req.user=decoded//attach user info to the request object
    next()
}
module.exports=authenticate
