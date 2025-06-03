const express=require('express')

const app=express()

// const jwt  = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const jwtSecret = process.env.JWT_SECRET;
// const jwtExpiry = process.env.JWT_EXPIRES_IN;

require('dotenv').config()
const port = process.env.PORT;
//middleware to parse JSON and enable CORS
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.get("/", (req,res)=>{
    res.send({
        "Welcome": "express.js"
    })
})
const todosRoute = require("./routes/todosRoute");

app.use("/", todosRoute);
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port,${port}`)
})


