const {Router} =require('express')
const shortid = require("shortid");
const authRouter=Router()
const users = [
    {
      id: shortid.generate(),
      role: "admin",
      username: "John_Doe",
      password: "123",
    },
    {
      id: shortid.generate(),
      role: "user",
      username: "Jane_Doe",
      password: "123",
    },
  ];
//log in

//sign out 
const { Router } = require("express");
const shortid = require("shortid");

const router = Router();


module.exports=router

// signToken function
// Takes a payload object (e.g. { sub: userId, role: 'admin' }).
// Calls jwt.sign(payload, JWT_SECRET) to:
// Base64-encode the header ({ alg: 'HS256', typ: 'JWT' })
// Base64-encode your payload
// Create an HMAC SHA-256 signature using JWT_SECRET
// Concatenate them into a token string:

