const bcrypt=require('bcrypt')
const saltRounds=10

const encryptPassword=(password)=>{
//hashes a plain-text password using bcrypt
const hash=bcrypt.hashSync(password, saltRounds)
return hash
}
//Compares a plain-text password with a hashed password to verify if they match.
const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
  };

  module.exports = {
    encryptPassword,
    comparePassword,
  };