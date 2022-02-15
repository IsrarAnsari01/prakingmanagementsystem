/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const parkingSlotsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    vehicleType: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[A-Za-z .0-9]{3, }$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Vehical Type!`,
      },
      required: true,
    },
    shift: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[A-Za-z0-9 ]{3, }$/.test(v);
        },
        message: (props) => `${props.value} is not a Shift!`,
      },
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
      type: String,
      validate: {
        validator: function (v) {
          return /^[0-9 ]$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Zip Code!`,
      },
    },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    addedOn: { type: String, default: date.TodayDate },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const parkingSlot = new mongoose.model("parkingSlots", parkingSlotsSchema);

module.exports.parkingSlot = parkingSlot;
