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
    message: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[A-Za-z .0-9]{3,}$/.test(v);
        },
        message: (props) => `${props.value} is not Valid!`,
      },
      required: true,
    },
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
