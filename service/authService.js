const { comparePassword } = require("../util/password");
const { signToken } = require("../util/token");
const userRepo = require("../repository/userRepo");

const login = async (username, password) => {
  const user = await userRepo.getUserByUsername(username);
  if (!user) {
    throw new Error("User not found");
  }
  if (comparePassword(password, user.password) === false) {
    throw new Error("User Password invalid");
  }
  const token=signToken({
    id: user.id,
    role: user.role,
  })
  return {token, user:{id: user.id, username: user.username,}}
};

module.exports={login}
// const signToken = (payload) => {
//     return jwt.sign(payload, JWT_SECRET, {
//       expiresIn: "10m",
//     });
//   };