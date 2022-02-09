/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const parkingSlotsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    vehicleType: { type: String, required: true },
    shift: { type: String, required: true },
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
const parkingSlots = new mongoose.model("parkingSlots", parkingSlotsSchema);

module.exports.parkingSlots = parkingSlots;
