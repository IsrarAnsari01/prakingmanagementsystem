/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    parkingSlotId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bookParking",
      required: true,
    },
    message: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[A-Za-z .0-9]{3,}$/.test(v);
        },
        message: (props) => `${props.value} is not Valid`,
      },
      required: true,
    },
    addedOn: { type: String, default: date.TodayDate },
  },
  {
    timestamps: true,
  }
);
const feedBack = new mongoose.Schema("feedback", feedbackSchema);
module.exports.feedBack = feedBack;
