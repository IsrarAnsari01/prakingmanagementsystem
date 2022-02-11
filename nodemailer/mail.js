/* eslint-disable */
let nodemailer = require("nodemailer");
let fs = require("fs");
let ejs = require("ejs");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "kevin0119brien@gmail.com",
    pass: "0349A24799",
  },
});

module.exports.signUpMail = (userEmail, token) => {
  let source = fs
    .readFileSync(`${__dirname}/templates/welcomeUser.ejs`, "utf-8")
    .toString();
  let template = ejs.compile(source);
  let html = template({ token: token });
  const mainOption = {
    from: "kevin0119brien@gmail.com",
    to: `${userEmail}`,
    subject: `Welcome to the parking management System`,
    html: `${html}`,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mainOption, (err, info) => {
      if (err) {
        console.log("Error in sending Mail ", err);
        reject(err);
      }
      resolve(true);
    });
  });
};
