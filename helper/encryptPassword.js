/* eslint-disable */
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.encryptPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};

module.exports.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
