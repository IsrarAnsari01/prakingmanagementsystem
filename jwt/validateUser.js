/* eslint-disable */

const jwt = require("jsonwebtoken");
const userRepo = require("../MCRR/Reposities/user.repo");
module.exports.validateUser = (roles) => {
  return (auth = async (req, response, next) => {
    // For PostMan
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    // For UI
    // const token = req.headers["authorization"];
    if (!token) {
      return response
        .status(400)
        .send({ status: false, err: "Unable to access it" });
    } else {
      try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        if (verified.id) {
          await new userRepo().singleUser({ _id: verified.id }).then((succ) => {
            if (roles.includes(succ.role)) {
              next();
              return;
            }
          });
        } else {
          response.status(401).send({
            status: false,
            permissionDenind: "You are not eligible for access it",
          });
        }
      } catch (err) {
        response
          .status(401)
          .send({ status: false, tokenExp: "Invalid Token Try again" });
      }
    }
  });
};

module.exports.validateRefreshToken = (token) => {
  const verified = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY);
  if (verified.id) {
    return verified.id;
  }
  return false;
};
