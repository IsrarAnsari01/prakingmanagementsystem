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
      res.status(200).send({ id: succ });
      //   if (mail.signUpMail()) {
      //   }
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    await new userRepo().loginUser(req.body.user).then((succ) => {
      //   const userId = succ.id;
      //   const token = jwt.sign({ id: userId }, process.env.TOKEN_SECRET_KEY, {
      //     expiresIn: "1440m",
      //   });
      //   res.status(200).send({ id: succ });
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};
