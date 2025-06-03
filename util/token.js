const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_SECRET;

//shared secret string used to sign and later verify JWTs
//jwt.sign() to create tokens, jwt.verify() to check them
const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "10m",
  });
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

const refreshToken=(payload)=>{
    return jwt.sign(payload, REFRESH_SECRET, {
        expiresIn: "7m"
    })
}

const verifyRefreshToken=(token)=>{
    return jwt.verify(token, REFRESH_SECRET)
}
jwt.sign(payload, secret, { expiresIn: "2h" }, (err, token) => {
  if (err) {
    console.error("Error signing token:", err);
    return;
  }
  console.log("Generated (async) JWT:", token);
});
jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.error("Error verifying the token", err);
    return resizeBy.status(401).json({ error: "Invalid token" });
  }
});
module.exports={
    signToken,
    refreshToken,
    verifyToken,
    verifyRefreshToken
}