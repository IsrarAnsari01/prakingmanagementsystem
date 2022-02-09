/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required,
    },
    parkingSlotId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bookParking",
      required,
    },
    message: { type: String, required },
    addedOn: { type: String, default: date.TodayDate },
  },
  {
    timestamps: true,
  }
);
const feedBack = new mongoose.Schema("feedback", feedbackSchema);
module.exports.feedBack = feedBack;
