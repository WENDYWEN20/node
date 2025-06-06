//retrieve data, get users from database
const {connectDB}=require("../database/connection")
const getUsers=async()=>{
    const connection=await connectDB()
    const sql="SELECT * FROM Users"
    const [results, fields]=await connection.query(sql)
    return results
}
//results assigned the value of rowsArray, results holds an array of row objects, fields is for fieldsArray(columns descriptors describing column names)
const getUserByUserName=async (username)=>{
    const connection=await connectDB()
    const sql=`SELECT * FROM Users WHERE username="${username}"`
    const [results, fields]=await connection.query(sql)
    if(results.length===0){
        return null
    }
    return results[0] //return the first user found
}
const getUserById=async (id)=>{
    const connection=await connectDB()
    const sql=`SELECT * FROM Users WHERE id="${id}"`
    const [results, fields]=await connection.query(sql)
    if(results.length===0){
        return null
    }
    return results[0] //return the first user found
}

const createUser=async(user)=>{
    try{const connection=await connectDB()
        const { id, username, password, role } = user || {};
        const sql = `INSERT INTO Users (id, username, password, role) VALUES ("${id}", "${username}", "${password}", "${role}")`;
        await connection.query(sql);
        return user;
    }catch(error){console.error(error.message)}
}
const userRepo={
    getUserById, getUsers, createUser, getUserByUserName
}

module.exports=userRepo