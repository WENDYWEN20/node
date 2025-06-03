const { verifyToken } = require("../util/token.js");
//Uses the rest parameter (...roles) to collect arguments (e.g., authorizeRoles('admin', 'mod') creates roles = ['admin', 'mod']).
function authorizeRoles(...roles) {
  return (req, res, next) => {
    console.log("Authorizing roles:", roles);
    console.log("Current user roles:", req.user);
    //   if (roles.includes(req.user.role)) {
    //     return next();
    //   }

    //   return res.status(403).json({
    //     message: "You do not have permission to access this resource",
    //   });

    const token = req.headers.authorization?.split(" ")[1]; //Expect "Bearer <token>"
    if (!token) return res.status(401).json({ error: "No token provided" });
    try {
      const decoded = verifyToken(token); // Decode JWT
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: "Forbidden: Insufficient role" });
      }
    } catch (err) {
      res.status(401).json({ err: "Invalid or Expired token" });
    }
  };
}

module.exports = authorizeRoles;
