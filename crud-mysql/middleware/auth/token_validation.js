const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    //that will get from header
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(400).send({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};
