// const express=require('express')
// const router=express.Router()
// const cookieParser=require('cookie-parser')
const authService=require("../service/authService")
const login=async()=>{
const {username, password}=req.body || {}

}

const logout=async(req, res)=>{
    res.clearCookie('token').status(200).json({message: 'Logout Successful'})
}

module.exports={login,logout}