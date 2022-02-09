/* eslint-disable */
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.encryptPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};

module.exports.comparePassword = (password) => {
  return bcrypt.compareSync(password, hash);
};
