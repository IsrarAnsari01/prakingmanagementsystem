/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const feedbackReplySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    message: { type: String, required: true },
    addedOn: { type: String, default: date.TodayDate },
    feedbackId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "feedback",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const feedbackReply = new mongoose.model("feedbackReply", feedbackReplySchema);

module.exports.feedbackReply = feedbackReply;
