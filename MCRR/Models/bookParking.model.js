/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const bookParkingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: { type: String, default: "Pending" },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    addedOn: { type: String, default: date.TodayDate },
  },
  {
    timestamps: true,
  }
);
const bookParking = new mongoose.Schema("bookParking", bookParkingSchema);

module.exports.bookParking = bookParking;
