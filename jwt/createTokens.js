/* eslint-disable */
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = class jwtTokens {
  accessToken(userId) {
    return jwt.sign({ id: userId }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "20m",
    });
  }

  refreshToken(userId) {
    return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET_KEY, {
      expiresIn: "1y",
    });
  }
};
