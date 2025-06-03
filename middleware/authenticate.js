const {verifyToken} = require('../util/token.js')
function authenticate(req, res, next){
    const token= req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Please log in"})
    }
    try{
        
    }catch(error){console.error("Token verification failed:", error)}
}
