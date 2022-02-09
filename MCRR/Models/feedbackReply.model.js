/* eslint-disable */

const mongoose = require("mongoose");
const date = require("../../helper/date");
const feedbackReplySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required },
    message: { type: String, required },
    addedOn: { type: String, default: date.TodayDate },
    feedbackId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "feedback",
      required,
    },
  },
  {
    timestamps: true,
  }
);
const feedbackReply = new mongoose.model("feedbackReply", feedbackReplySchema);

module.exports.feedbackReply = feedbackReply;
