/* eslint-disable */

const mongoose = require("mongoose");
module.exports.connectWithDB = () => {
  mongoose.connect(
    "mongodb+srv://israr0119:0349A24799@cluster0.haoob.mongodb.net/parkingmanagementsystem?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const db = mongoose.connection;
  db.once("error", (err) => {
    console.log("Error in connecting to DB");
    console.log(err);
  });

  db.once("open", () => {
    console.log("Connected to DB successfully..!");
  });
};
