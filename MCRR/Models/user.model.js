/* eslint-disable */
const mongoose = require("mongoose");
require("mongoose-type-email");
const date = require("../../helper/date");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[A-Za-z .0-9]{3,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Name!`,
    },
    required: true,
  },
  email: { type: mongoose.SchemaTypes.Email, unique: true, required: true },
  password: {
    type: String,
    minlength: 8,
    maxlength: 100,
    required: true,
  },
  country: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[A-Za-z ]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Country Name !`,
    },
    required: true,
  },
  city: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[A-Za-z ]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Country Name !`,
    },
    required: true,
  },
  zipcode: {
    type: Number,
    minlength: 4,
    required: true,
  },
  street: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[A-Za-z0-9!@#$%&^*. ]{3,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Street Code!`,
    },
  },

  role: { type: String, default: "customer" },
  addedOn: { type: String, default: date.TodayDate },
});
const user = new mongoose.model("users", userSchema);
module.exports.user = user;
