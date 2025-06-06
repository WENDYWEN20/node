const {encryptPassword} =require('../util/password')
const shortid=require('shortid')
const userRepo=require('../repository/userRepo')
const createUser=async(user)=>{
    const {username, password, role}=user || {}
    const _user=await userRepo.getUserByUserName(username)
    if(_user){
        
    }
}