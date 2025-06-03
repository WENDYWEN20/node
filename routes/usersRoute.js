const {Router} =require('express')  //import {Router} class from destructure of Express Framework
const authorizeRoles=require('../middleware/authorizeRoles') //import middleware function to check if user is one of the roles
const router=Router()//create a new instance of Express router

//admin-only
router.get("/control-board", authorizeRoles('admin'), (req, res)=>{
    return res.status(200).json({
        message:'This is the control board',
        data: {
            users: 100,
            activeUsers: 75,
            inactiveUsers: 25,
            newRegistrations: 10,
          },
    })
})
//authorizeRoles("admin"): Middleware ensures only users with the admin role (likely from a JWT payload) can access this route.
//(req, res) => { The route handler function }

//admin and mod only (mods can ban users)
router.patch('/ban-user/:id', authorizeRoles("admin","mod"), (req,res)=>{
    console.log("Banning user...");
    const userId=req.params.id
    return res.status(200).json({
        message: `User ${userId} has been banned successfully`
    })
})

module.exports=router