/* eslint-disable */
const userRepo = require("../Reposities/user.repo");
const parkingSlotRepo = require("../Reposities/parkingSlots.repo");
const passwordEncryption = require("../../helper/encryptPassword");
const mail = require("../../nodemailer/mail");
const jwtToken = require("../../jwt/createTokens");
const validateToken = require("../../jwt/validateUser");

module.exports.saveUser = async (req, res) => {
  try {
    req.body.user.password = passwordEncryption.encryptPassword(
      req.body.user.password
    );
    await new userRepo().saveUser(req.body.user).then((succ) => {
      if (mail.signUpMail(succ.email)) {
        res.status(200).send({ id: succ._id });
      }
    });
  } catch (error) {
    res.status(500).send({ error });
  }
  return;
};

module.exports.loginUser = async (req, res) => {
  try {
    await new userRepo().loginUser(req.body.user).then((succ) => {
      if (
        passwordEncryption.comparePassword(
          req.body.user.password,
          succ.password
        )
      ) {
        req.session.isUserLoggedIn = true;
        const token = new jwtToken().accessToken(succ._id);
        const refreshTokens = new jwtToken().refreshToken(succ._id);
        res.status(200).send({ token: token, refreshTokens: refreshTokens });
      }
    });
  } catch (error) {
    res.status(500).send({ error });
  }
  return;
};

module.exports.updateUser = async (req, res) => {
  try {
    await new userRepo()
      .updateUser(req.params.id, req.body.user)
      .then((succ) => {
        res.status(200).send({ updated: true });
      });
  } catch (error) {
    res.status(400).send({ error: error });
  }

  return;
};

module.exports.refreshToken = async (req, res) => {
  if (!req.session.isUserLoggedIn) {
    res.status(401).send({ error: "You are not logged in" });
    return;
  }
  if (!req.body.reFreshToken) res.status(401).send({ error: "Invalid  Token" });
  const userId = validateToken.validateRefreshToken(req.body.reFreshToken, res);
  if (!userId) res.status(401).send({ error: "Invalid Refresh Token" });
  res.status(200).send({
    newAccessToken: new jwtToken().accessToken(userId),
    newRefreshToken: new jwtToken().refreshToken(userId),
  });
};

module.exports.sameCityParking = async (req, res) => {
  try {
    await new parkingSlotRepo()
      .sameCityParking(req.body.cityName)
      .then((succ) => {
        res.status(200).send({ parkingSlots: succ });
      });
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports.nearestParking = async (req, res) => {
  try {
    await new parkingSlotRepo()
      .nearestParking(req.body.data.zipcode, req.body.data.cityName)
      .then((succ) => {
        res.send(200).send({ slots: succ });
      });
  } catch (error) {
    res.send(400).send({ error });
  }
};
