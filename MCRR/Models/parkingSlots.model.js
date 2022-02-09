/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const parkingSlotsSchema = new mongoose.Schema(
  {
    date: { type: Date, required },
    vehicleType: { type: String, required },
    shift: { type: String, required },
    startTime: { type: Date, required },
    endTime: { type: Date, required },
    addedOn: { type: String, default: date.TodayDate },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required,
    },
  },
  {
    timestamps: true,
  }
);
const parkingSlots = new mongoose.model("parkingSlots", parkingSlotsSchema);

module.exports.parkingSlots = parkingSlots;
