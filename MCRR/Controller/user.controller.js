/* eslint-disable */
const userRepo = require("../Repositry/user.repo");
const passwordEncryption = require("../../helper/encryptPassword");
const jwt = require("jsonwebtoken");
const mail = require("../../helper/nodemailer/mail");
const dotenv = require("dotenv");
dotenv.config();

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
        const token = jwt.sign({ id: succ._id }, process.env.TOKEN_SECRET_KEY, {
          expiresIn: "360m",
        });
        req.session.userId = succ._id;
        req.session.isLoggedIn = true;
        req.session.save(function (err) {
          if (err) console.log("Session not saved!", err);
          res.status(200).send({ token });
        });
        console.log("Express session after login", req.session);
      }
    });
  } catch (error) {
    res.status(500).send({ error });
  }
  return;
};

module.exports.updateUser = async (req, res) => {
  console.log(req.session);
  if (!req.session.isLoggedIn) {
    res.status(403).send({ error: "Login First" });
    return;
  }
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
