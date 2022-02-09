/* eslint-disable */
const mongoose = require("mongoose");
const date = require("../../helper/date");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: {
    type: String,
    min: 8,
    max: 16,
    required: true,
  },
  role: { type: String, default: "customer" },
  addedOn: { type: String, default: date.TodayDate },
});
const users = new mongoose.model("users", userSchema);
module.exports.users = users;
