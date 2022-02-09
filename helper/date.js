/* eslint-disable */
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
const TodayDate =
  date.getDate() + " - " + months[date.getMonth()] + " - " + date.getFullYear();
module.exports.TodayDate = TodayDate;
